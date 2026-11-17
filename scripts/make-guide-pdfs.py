#!/usr/bin/env python3
"""Generate the two free guide PDFs served by /downloads.

Reuses the pure-stdlib minimal PDF writer from the Sunshine school site
(~/workspace/sunshine-international-school/scripts/make-pdfs.py), extended
with word-wrapping and multi-page support. No third-party libraries needed.
PDF text is plain ASCII (Rs. instead of the rupee sign) so it encodes
cleanly in latin-1.
"""
import os

OUT = os.path.join(os.path.dirname(__file__), "..", "static", "downloads")
os.makedirs(OUT, exist_ok=True)

PAGE_W, PAGE_H = 612, 792
MARGIN = 56
TOP = 760
BOTTOM = 64
WRAP = 88  # chars per body line at 11pt Helvetica across ~500pt


def esc(s):
    return s.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def wrap(text, width=WRAP, indent=""):
    words = text.split()
    lines, cur = [], indent
    for w in words:
        if len(cur) + len(w) + (1 if cur.strip() else 0) > width and cur.strip():
            lines.append(cur)
            cur = indent + w
        else:
            cur = cur + (" " if cur.strip() else "") + w
    if cur.strip():
        lines.append(cur)
    return lines or [indent]


def build_pages(title, subtitle, blocks):
    """blocks: list of ('h', heading) | ('', blank) | ('p', paragraph)."""
    pages = []
    ops = []  # (font_size, y, text)
    y = TOP

    def new_page():
        nonlocal ops, y
        if ops:
            pages.append(ops)
        ops = []
        y = TOP

    def text(size, s, gap_after):
        nonlocal y
        if y < BOTTOM + gap_after:
            new_page()
        ops.append((size, y, s))
        y -= gap_after

    # Title block (first page only)
    ops.append((20, y, title))
    y -= 14
    ops.append((10, y, subtitle))
    y -= 34

    for kind, line in blocks:
        if kind == "":
            y -= 12
            if y < BOTTOM:
                new_page()
            continue
        if kind == "h":
            if y < BOTTOM + 40:
                new_page()
            y -= 8
            text(13, line, 22)
        else:
            for i, w in enumerate(wrap(line)):
                text(11, w, 17)

    if ops:
        pages.append(ops)

    # Render pages to PDF objects
    content_objs = []
    page_objs = []
    font_id = None
    obj_n = 5  # 1 catalog, 2 pages, 3.. pages, then font, then contents
    page_ids = list(range(3, 3 + len(pages)))
    font_id = 3 + len(pages)
    content_ids = list(range(font_id + 1, font_id + 1 + len(pages)))

    objs = []
    objs.append(b"<< /Type /Catalog /Pages 2 0 R >>")
    objs.append(
        ("<< /Type /Pages /Kids [%s] /Count %d >>"
         % (" ".join(f"{p} 0 R" for p in page_ids), len(pages))).encode("latin-1")
    )
    for pid, cid in zip(page_ids, content_ids):
        objs.append(
            ("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
             f"/Resources << /Font << /F1 {font_id} 0 R >> >> /Contents {cid} 0 R >>").encode("latin-1")
        )
    objs.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    for i, ops in enumerate(pages):
        stream = []
        for size, yy, s in ops:
            stream.append("BT /F1 %d Tf %d %d Td (%s) Tj ET" % (size, MARGIN, yy, esc(s)))
        # Footer
        stream.append(
            "BT /F1 9 Tf %d 40 Td (%s) Tj ET"
            % (MARGIN, esc("MSY Law, New Delhi  |  +91 98110 12345  |  hello@msylaw.in"))
        )
        stream.append(
            "BT /F1 9 Tf 540 40 Td (Page %d) Tj ET" % (i + 1)
        )
        data = "\n".join(stream).encode("latin-1", "replace")
        objs.append(b"<< /Length %d >>\nstream\n" % len(data) + data + b"\nendstream")

    out = bytearray(b"%PDF-1.4\n")
    offsets = []
    for i, o in enumerate(objs, start=1):
        offsets.append(len(out))
        out += b"%d 0 obj\n" % i + o + b"\nendobj\n"
    xref = len(out)
    out += b"xref\n0 %d\n" % (len(objs) + 1)
    out += b"0000000000 65535 f \n"
    for off in offsets:
        out += b"%010d 00000 n \n" % off
    out += (
        b"trailer\n<< /Size %d /Root 1 0 R >>\nstartxref\n%d\n%%%%EOF\n"
        % (len(objs) + 1, xref)
    )
    return bytes(out)


CONTACT = "MSY Law, New Delhi - Statesman House, Barakhamba Road, Connaught Place, New Delhi 110001"
PHONE = "Phone: +91 98110 12345 (Mon-Sat, 10 AM - 7 PM IST)   Email: hello@msylaw.in"
DISCLAIMER = (
    "This guide is general information only. It is not legal advice and does not "
    "create a lawyer-client relationship. Tax law changes often - check the current "
    "law or speak to a lawyer before you act."
)

GUIDES = {
    "income-tax-notice-checklist.pdf": (
        "Income Tax Notice - First 48 Hours Checklist",
        "MSY Law, New Delhi  |  Free guide - general information, not legal advice",
        [
            ("p", "Got an income tax notice? Work through these 10 steps in the first 48 hours. Most notices are routine queries - what matters is replying correctly and on time."),
            ("", ""),
            ("h", "The checklist"),
            ("p", "1. Don't panic. Most notices are routine queries, not raids. Read the notice calmly, twice, before you do anything."),
            ("p", "2. Note the DIN and the dates. Write down the Document Identification Number, the issue date and the reply deadline."),
            ("p", "3. Check the notice on the e-filing portal. Log in at incometax.gov.in and verify it under 'e-Proceedings'. If it is not there, treat it with suspicion."),
            ("p", "4. Don't ignore the deadline. A late reply can add penalty and interest and can turn a small query into a full assessment."),
            ("p", "5. Find out which section it is under. 143(1), 143(2) scrutiny, 148, 139(9) defective return or 245 - the section decides how you must reply."),
            ("p", "6. Gather your documents. Your ITR, Form 26AS, AIS/TIS, bank statements and the papers for the specific query in the notice."),
            ("p", "7. Don't reply alone. A wrong or incomplete reply becomes part of the record. Get a tax lawyer to read the notice first."),
            ("p", "8. Keep proof of everything. Save the notice, your reply and the acknowledgement number in one folder."),
            ("p", "9. Never pay a demand without checking it. Verify the computation first; if it is wrong, ask for rectification."),
            ("p", "10. Book a free consultation. Bring the notice - a lawyer will read it with you and plan the reply. Call +91 98110 12345."),
            ("", ""),
            ("h", "Need help?"),
            ("p", CONTACT),
            ("p", PHONE),
            ("p", "Free 30-minute consultation - book at tax-lawyer-landing.pages.dev/free-consultation"),
            ("", ""),
            ("h", "Disclaimer"),
            ("p", DISCLAIMER),
        ],
    ),
    "gst-notice-reply-checklist.pdf": (
        "GST Notice Reply Checklist",
        "MSY Law, New Delhi  |  Free guide - general information, not legal advice",
        [
            ("p", "Got a GST notice? Work through these 10 steps before you reply. A point-wise reply with documents attached is what gets demands reduced."),
            ("", ""),
            ("h", "The checklist"),
            ("p", "1. Identify the notice type. Section 73 (normal) vs section 74 (fraud or suppression) - the stakes and time limits are different."),
            ("p", "2. Note the DRC-01 details. The demand breakup - tax, interest and penalty - and the last date to reply."),
            ("p", "3. Check the notice on the GST portal. Verify it under 'Notices and Orders' before you reply to anything."),
            ("p", "4. Collect invoices and e-way bills. For every supply the notice questions, keep the invoice and the e-way bill ready."),
            ("p", "5. Reconcile GSTR-2B with your books. Find every ITC mismatch and note the reason for each one."),
            ("p", "6. Reconcile GSTR-1 with GSTR-3B. Output tax differences are the most common trigger for a notice."),
            ("p", "7. Draft a point-wise reply. Answer every allegation separately and attach the document that supports each point."),
            ("p", "8. Pay the admitted part, dispute the rest. Paying what is genuinely due stops interest and shows good faith."),
            ("p", "9. Keep proof of filing. Save your reply, the ARN and the acknowledgement for your records."),
            ("p", "10. Don't miss the appeal window. If the order goes against you, appeal within 3 months - get advice before the order, not after."),
            ("", ""),
            ("h", "Need help?"),
            ("p", CONTACT),
            ("p", PHONE),
            ("p", "Free 30-minute consultation - book at tax-lawyer-landing.pages.dev/free-consultation"),
            ("", ""),
            ("h", "Disclaimer"),
            ("p", DISCLAIMER),
        ],
    ),
}

for name, (title, subtitle, blocks) in GUIDES.items():
    data = build_pages(title, subtitle, blocks)
    with open(os.path.join(OUT, name), "wb") as f:
        f.write(data)
    print(name, len(data), "bytes")
