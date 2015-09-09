var fs = require('fs');
var spawn = require('child_process').spawn; 

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
          page.content = page.content.replace(/\.html/g, '.php');
          
          page.content = page.content.replace(/(<div class="book-summary">)([\s\S]*)(<\/ul>\n<\/div>)/mg,'');
          page.content = page.content.replace(/(<div class="body-inner">)([\s\S]*)(<\/h1>\n<\/div>)/mg, '');
          page.content = page.content.replace(/(<a href=)(.*)(<i class="fa fa-angle-left"><\/i><\/a>)/mg, '');       
          page.content = page.content.replace(/(<a href=)(.*)(<i class="fa fa-angle-right"><\/i><\/a>)/mg, '');          

       /*   var prc = spawn('cp', ['sytle.css', './_book/gitbook/']);

	prc.stdout.on('data', function(data) {
	console.log(data.toString());
	});

	prc.stderr.on('data', function(data) {
	console.log(data.toString());
	});

	prc.on('exit', function(code, signal) {
	console.log('child process exit:'+code);
	});*/
         
       //   var php = fs.readFileSync('ss.php', 'utf8');
       //   page.content = php + page.content;
          return page;
           

      }

   }
};
