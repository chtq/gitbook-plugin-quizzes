module.exports = {
    book: {
        assets: "./book",
        js: [
            "quizzes.js"
        ],
        css: [
            "quizzes.css"
        ]
    },
   hooks:{

        "page:after": function(page) {

          // console.log(page);
        // page.content =  '<code>dadasd</code>' + page.content; 
          page.content = page.content.replace(/!!!!!!!!/g, '<pre><code>');
          page.content = page.content.replace(/@@@@@@@@/g, '</code></pre>');
          return page;
           

      }

   }
};
