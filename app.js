$(document).ready(function(){

var body=$("#chat-body").html(
//document.write(
    '<div>'+
    '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">'+
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/4.0.2/bootstrap-material-design.css">'+
    '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">'+
    '<link rel="stylesheet" href="chatbot-style.css">'+ '</div>' +

 
    '<div id="chat-circle" class="btn btn-raised">'+ '\n'+
            '<div id="chat-overlay"></div>'+ '\n'+
                '<i class="material-icons">chat</i>'+ '\n'+
        '</div>'+ '\n'+      
      '<div class="chat-box">'+ '\n'+
        '<div class="chat-box-header">'+ '\n'+
          'ACE Chatbot'+ '\n'+
          '<span class="chat-box-toggle"><i class="material-icons">close</i></span>'+ '\n'+
        '</div>'+ '\n'+
        '<div class="chat-box-body">'+ '\n'+
          '<div class="chat-box-overlay"> '+ '\n'+
          '</div>'+ '\n'+
          '<div class="chat-logs">'+ '\n'+           
          '</div>'+ '\n'+
        '</div>'+ '\n'+
        '<div class="chat-input">  '+ '\n'+    
          '<form>'+ '\n'+
            '<input type="text" id="chat-input" placeholder="Send a message..."/>'+ '\n'+
          '<button type="submit" class="chat-submit" id="chat-submit"><i class="material-icons">send</i></button>'+ '\n'+
          '</form>'+ '\n'+      
        '</div>'+ '\n'+
      '</div>'
);
});