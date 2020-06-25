var chatGateway = (function () {
  let gatewayEndpoint = chatbotConfig.gatewayEndpoint;
  var sessionId = "s1";


  this.getResponse = async function (message) {

    var request = createRequest(message);

    return await jQuery.ajax
      ({
        url: gatewayEndpoint + sessionId,
        type: "POST",
        data: JSON.stringify(request),
        contentType: "application/json; charset=utf-8",
        dataType: "json",

      })
      .then(function (response) {
        return createResponse(response);
      })
      .fail(function (qXHR, status) {
        return "";
      });
  };

  this.createRequest = function (message) {

    var request = {
      queryInput: {
        text: {
          text: message
        }
      }
    };

    return request;
  };

  this.createResponse = function (repsonse) {

    if (repsonse.queryResult.fulfillmentMessages != null) {
      return repsonse.queryResult.fulfillmentMessages[0].text.text[0]
    }

    return repsonse.queryResult.fulfillmentText;
  };

  return {
    getResponse: getResponse
  };

})();

