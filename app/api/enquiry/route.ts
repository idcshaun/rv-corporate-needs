import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Get form data from the website
    const body = await request.json();

    const {
      name,
      company,
      phone,
      email,
      requirement,
    } = body;

    // Validate required fields
    if (!name || !phone || !requirement) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send enquiry email
    const { data, error } = await resend.emails.send({
      from: "RV Corporate Needs <onboarding@resend.dev>",

      // Change this to the actual RV email later
      to: "idc.shaun.1767@gmail.com",

      // If customer provides an email, replying to the
      // enquiry will go directly to them
      replyTo: email || undefined,

      subject: `New Website Enquiry — ${name}`,

      html: `
        <!DOCTYPE html>

        <html>
          <head>
            <meta charset="UTF-8" />

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />

            <title>
              New RV Corporate Needs Enquiry
            </title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f4f5f7;
              font-family: Arial, Helvetica, sans-serif;
            "
          >

            <div
              style="
                max-width: 680px;
                margin: 40px auto;
                background: #ffffff;
                border-radius: 16px;
                overflow: hidden;
                border: 1px solid #e5e7eb;
              "
            >

              <!-- HEADER -->

              <div
                style="
                  background: #0b1220;
                  padding: 32px;
                  color: #ffffff;
                "
              >

                <p
                  style="
                    margin: 0 0 8px;
                    color: #d89b32;
                    font-size: 12px;
                    font-weight: bold;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                  "
                >
                  RV Corporate Needs
                </p>

                <h1
                  style="
                    margin: 0;
                    font-size: 26px;
                    line-height: 1.3;
                  "
                >
                  New Website Enquiry
                </h1>

                <p
                  style="
                    margin: 10px 0 0;
                    color: rgba(255,255,255,0.6);
                    font-size: 14px;
                  "
                >
                  A new enquiry has been submitted
                  through the website.
                </p>

              </div>


              <!-- CONTENT -->

              <div style="padding: 32px;">

                <h2
                  style="
                    margin: 0 0 20px;
                    color: #0b1220;
                    font-size: 18px;
                  "
                >
                  Customer Details
                </h2>


                <!-- NAME -->

                <div
                  style="
                    margin-bottom: 18px;
                    padding-bottom: 18px;
                    border-bottom: 1px solid #eeeeee;
                  "
                >

                  <p
                    style="
                      margin: 0 0 5px;
                      color: #999999;
                      font-size: 12px;
                    "
                  >
                    NAME
                  </p>

                  <p
                    style="
                      margin: 0;
                      color: #111827;
                      font-size: 15px;
                      font-weight: 600;
                    "
                  >
                    ${escapeHtml(name)}
                  </p>

                </div>


                <!-- COMPANY -->

                <div
                  style="
                    margin-bottom: 18px;
                    padding-bottom: 18px;
                    border-bottom: 1px solid #eeeeee;
                  "
                >

                  <p
                    style="
                      margin: 0 0 5px;
                      color: #999999;
                      font-size: 12px;
                    "
                  >
                    COMPANY
                  </p>

                  <p
                    style="
                      margin: 0;
                      color: #111827;
                      font-size: 15px;
                    "
                  >
                    ${escapeHtml(company || "Not provided")}
                  </p>

                </div>


                <!-- PHONE -->

                <div
                  style="
                    margin-bottom: 18px;
                    padding-bottom: 18px;
                    border-bottom: 1px solid #eeeeee;
                  "
                >

                  <p
                    style="
                      margin: 0 0 5px;
                      color: #999999;
                      font-size: 12px;
                    "
                  >
                    PHONE
                  </p>

                  <p
                    style="
                      margin: 0;
                      color: #111827;
                      font-size: 15px;
                    "
                  >
                    ${escapeHtml(phone)}
                  </p>

                </div>


                <!-- EMAIL -->

                <div
                  style="
                    margin-bottom: 28px;
                    padding-bottom: 18px;
                    border-bottom: 1px solid #eeeeee;
                  "
                >

                  <p
                    style="
                      margin: 0 0 5px;
                      color: #999999;
                      font-size: 12px;
                    "
                  >
                    EMAIL
                  </p>

                  <p
                    style="
                      margin: 0;
                      color: #111827;
                      font-size: 15px;
                    "
                  >
                    ${escapeHtml(email || "Not provided")}
                  </p>

                </div>


                <!-- REQUIREMENT -->

                <h2
                  style="
                    margin: 0 0 12px;
                    color: #0b1220;
                    font-size: 18px;
                  "
                >
                  Requirement
                </h2>

                <div
                  style="
                    padding: 20px;
                    background: #f7f8fa;
                    border-radius: 12px;
                    color: #374151;
                    font-size: 14px;
                    line-height: 1.7;
                    white-space: pre-line;
                  "
                >
                  ${escapeHtml(requirement)}
                </div>

              </div>


              <!-- FOOTER -->

              <div
                style="
                  padding: 22px 32px;
                  background: #f8f9fa;
                  border-top: 1px solid #eeeeee;
                "
              >

                <p
                  style="
                    margin: 0;
                    color: #999999;
                    font-size: 12px;
                    line-height: 1.6;
                  "
                >
                  This enquiry was submitted through
                  the RV Corporate Needs website.
                </p>

              </div>

            </div>

          </body>
        </html>
      `,
    });


    // Resend returned an error
    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send enquiry.",
        },
        { status: 500 }
      );
    }


    // Successful submission
    return NextResponse.json(
      {
        success: true,
        message: "Enquiry sent successfully.",
        data,
      },
      { status: 200 }
    );

  } catch (error) {

    console.error("Server error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while sending the enquiry.",
      },
      { status: 500 }
    );
  }
}


/*
  Escape user-provided content before putting it
  inside the HTML email.

  This prevents someone from submitting HTML
  or scripts through the enquiry form.
*/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}