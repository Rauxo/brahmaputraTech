export const TrackingService = {
  pushEvent: (eventName, eventData = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventData
      });
      console.log(`[TrackingService] Pushed to dataLayer:`, eventName, eventData);
    } else {
      console.warn(`[TrackingService] window.dataLayer not found. Event: ${eventName}`, eventData);
    }
  },

  // Specific event triggers based on requirements
  pageView: (pagePath) => {
    TrackingService.pushEvent('page_view', { page_path: pagePath });
  },

  whatsappClick: (location) => {
    TrackingService.pushEvent('whatsapp_click', { click_location: location });
  },

  phoneClick: (location) => {
    TrackingService.pushEvent('phone_click', { click_location: location });
  },

  emailClick: (location) => {
    TrackingService.pushEvent('email_click', { click_location: location });
  },

  consultationClick: (location) => {
    TrackingService.pushEvent('consultation_click', { click_location: location });
  },

  formStart: (formName) => {
    TrackingService.pushEvent('form_start', { form_name: formName });
  },

  formSubmit: (formName, leadData = {}) => {
    TrackingService.pushEvent('form_submit', { form_name: formName, ...leadData });
  },

  leadGenerated: (source) => {
    TrackingService.pushEvent('lead_generated', { lead_source: source });
  }
};
