var knowledgebaseEndpoint = chatbotConfig.knowledgebaseEndpoint;

function knowledgeItem(question, answer) {
    this.question = question;
    this.answer = answer;

}

var knowledgeBase = (function () {

    let knowledgeItems = new Array();

  /*  add("who are you?", "I am Giji");
    add("PM of India?", "N Modi");*/


    function add(question, answer) {
        knowledgeItems.push(new knowledgeItem(question, answer));
    };

    function deleteItem(item) {
        let i = knowledgeItems.indexOf((kitem) => kitem == item);
        knowledgeItems.splice(i, 1);
    };

    async function getAll() {

        return jQuery.ajax
            ({
                url: knowledgebaseEndpoint,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                dataType: "json",

            })
            .then(function (data) {
                data.forEach((item)=>add(item.question, item.answer));
                return knowledgeItems;
            })
            .fail(function (qXHR, status) {
                console.log('Knowledgebase load failed.');
            });

        return knowledgeItems;
    };

    async function save() {
        var data = knowledgeItems.map((item, index) => (item.question + ":" + item.answer)).join();

        return jQuery.ajax
            ({
                url: knowledgebaseEndpoint,
                type: "POST",
                data: JSON.stringify(knowledgeItems),
                contentType: "application/json; charset=utf-8",
                dataType: "json",

            })
            .then(function (response) {
                console.log('Knowledgebase saved.');
            })
            .fail(function (qXHR, status) {
                console.log('Knowledgebase save failed.');
            });



    }

    return {
        getAll: getAll,
        add: add,
        delete: deleteItem,
        save: save
    };
}
)();