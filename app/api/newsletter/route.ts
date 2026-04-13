import { appendNewsletterSubmission } from "@/lib/googleSheets";

type RequestBody = {
  fullName?: string;
  email?: string;
  cityTown?: string;
  country?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestBody;

    const fullName = body.fullName?.trim();
    const email = body.email?.trim();
    const cityTown = body.cityTown?.trim();
    const country = body.country?.trim();

    if (!fullName || !email || !cityTown || !country) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    await appendNewsletterSubmission({
      fullName,
      email,
      cityTown,
      country,
    });

    return Response.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error.";

    return Response.json({ error: message }, { status: 500 });
  }
}
