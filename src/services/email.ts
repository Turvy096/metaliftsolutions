export interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactApiResponse {
  success: boolean;
  error?: string;
}

const CONTACT_ENDPOINT = "https://metaliftsolutions.co.ke/contact.php";

export const sendContactEmail = async (
  data: ContactEmailData,
): Promise<ContactApiResponse> => {
  let response: Response;

  try {
    response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch {
    // Network failure, CORS issue, endpoint unreachable, etc.
    throw new Error(
      "Could not reach the server. Please check your connection and try again.",
    );
  }

  const responseBody = await response.text();
  let result: ContactApiResponse | undefined;

  try {
    result = JSON.parse(responseBody) as ContactApiResponse;
  } catch {
    // PHP/server error pages are often HTML, so do not expose their contents.
  }

  if (!response.ok) {
    throw new Error(
      result?.error ||
        `The contact server returned HTTP ${response.status}. Please try again later.`,
    );
  }

  if (!result) {
    throw new Error("The contact server did not return valid JSON.");
  }

  if (!result.success) {
    throw new Error(
      result.error || "Failed to send your message. Please try again later.",
    );
  }

  return result;
};
