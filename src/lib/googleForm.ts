// Google Form configuration
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScffX_ectNiuAcBrzXHtbeaLXupR8uLbS7M7eAIya1yeoHEAw/viewform";

// Entry IDs for form fields - These need to be obtained from the form's pre-filled link
// To get these IDs: Edit form > Three dots > Get pre-filled link > Fill fields > Get link
// The URL will contain entry.XXXXX parameters - use those numbers here
const FORM_FIELDS = {
  serviceType: "entry.XXXXX", // Replace XXXXX with actual entry ID for service type field
  planName: "entry.YYYYY",    // Replace YYYYY with actual entry ID for plan name field
  pickup: "entry.ZZZZZ",      // Replace ZZZZZ with actual entry ID for pickup location
  dropoff: "entry.AAAAA",     // Replace AAAAA with actual entry ID for dropoff location
  datetime: "entry.BBBBB"     // Replace BBBBB with actual entry ID for date/time
};

interface BookingParams {
  serviceType?: string;
  planName?: string;
  pickup?: string;
  dropoff?: string;
  datetime?: string;
}

/**
 * Opens Google Form with pre-filled parameters
 * @param params - Object containing form field values to pre-fill
 */
export const openBookingForm = (params: BookingParams = {}) => {
  const urlParams = new URLSearchParams();
  
  // Add parameters if they exist
  if (params.serviceType && FORM_FIELDS.serviceType !== "entry.XXXXX") {
    urlParams.append(FORM_FIELDS.serviceType, params.serviceType);
  }
  if (params.planName && FORM_FIELDS.planName !== "entry.YYYYY") {
    urlParams.append(FORM_FIELDS.planName, params.planName);
  }
  if (params.pickup && FORM_FIELDS.pickup !== "entry.ZZZZZ") {
    urlParams.append(FORM_FIELDS.pickup, params.pickup);
  }
  if (params.dropoff && FORM_FIELDS.dropoff !== "entry.AAAAA") {
    urlParams.append(FORM_FIELDS.dropoff, params.dropoff);
  }
  if (params.datetime && FORM_FIELDS.datetime !== "entry.BBBBB") {
    urlParams.append(FORM_FIELDS.datetime, params.datetime);
  }
  
  // Construct final URL
  const finalUrl = urlParams.toString() 
    ? `${GOOGLE_FORM_URL}?${urlParams.toString()}`
    : GOOGLE_FORM_URL;
  
  // Open in new tab
  window.open(finalUrl, "_blank");
};
