window.watsonAssistantChatOptions = {
    integrationID: "dbfc0eec-373e-4db3-97ad-28cbf25abe1e", // The ID of this integration.
    region: "us-east", // The region your integration is hosted in.
    serviceInstanceID: "5c3877d5-96ec-4a11-8330-58c3fcbd18c3", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
