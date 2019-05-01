
$(document).ready(function(){
     //call editor 
           $('.content').richText(); 
     
            //show input of textarea
           $('.view').click(function(){
           // Show value of listcontent
                var input= $('.listsource').val();
                alert(input); 
                console.log(input);
            });
            //Pass content to another textarea
          $('.qoute').click(function(){
                    // Show value of content
             // var inputshow =$('.content').val();
                 // $(inputshow)=$('.listsource').val();
//              $('.content').val(input);
            var inputshow =$('.listsource').val();
               $('.content').unRichText();
               $('.content').val(inputshow);
               $('.content').richText(); 
                  //alert(inputshow); 
                  console.log(inputshow);
            });
            //Pass List content to textarea
            $('#items').click(function(){
                var listinput = $('#items').val();
                $('.listsource').val(listinput);
                //alert(listinput);
                 console.log(listinput);
            });
    
             //Pass List content to textarea
            $('#items1').click(function(){
                var listinput = $('#items1').val();
                $('.listsource').val(listinput);
                //alert(listinput);
                 console.log(listinput);
            });
    
            //Download textarea content from button
            $('.download').click(function() {
                contentType =  'data:application/octet-stream,';
                uriContent = contentType + encodeURIComponent($('.content').val());
                this.setAttribute('href', uriContent);
            });
        
           });    
//            $('.content').richText({
//          // text formatting
//          bold: true,
//          italic: true,
//          underline: true,
//
//          // text alignment
//          leftAlign: true,
//          centerAlign: true,
//          rightAlign: true,
//
//          // lists
//          ol: true,
//          ul: true,
//
//          // title
//          heading: true,
//
//          // fonts
//          fonts: true,
//          fontList: ["Arial", 
//            "Arial Black", 
//            "Comic Sans MS", 
//            "Courier New", 
//            "Geneva", 
//            "Georgia", 
//            "Helvetica", 
//            "Impact", 
//            "Lucida Console", 
//            "Tahoma", 
//            "Times New Roman",
//            "Verdana"
//            ],
//          fontColor: true,
//          fontSize: true,
//
//          // uploads
//          imageUpload: true,
//          fileUpload: true,
//
//          // media
////          <a href="https://www.jqueryscript.net/tags.php?/video/">video</a>Embed: true,
//
//          // link
//          urls: true,
//
//          // tables
//          table: true,
//
//          // code
//          removeStyles: true,
//          code: true,
//
//          // colors
//          colors: [],
//
//          // dropdowns
//          fileHTML: '',
//          imageHTML: '',
//
//          // translations
//          translations: {
//            'title': 'Title',
//            'white': 'White',
//            'black': 'Black',
//            'brown': 'Brown',
//            'beige': 'Beige',
//            'darkBlue': 'Dark Blue',
//            'blue': 'Blue',
//            'lightBlue': 'Light Blue',
//            'darkRed': 'Dark Red',
//            'red': 'Red',
//            'darkGreen': 'Dark Green',
//            'green': 'Green',
//            'purple': 'Purple',
//            'darkTurquois': 'Dark Turquois',
//            'turquois': 'Turquois',
//            'darkOrange': 'Dark Orange',
//            'orange': 'Orange',
//            'yellow': 'Yellow',
//            'imageURL': 'Image URL',
//            'fileURL': 'File URL',
//            'linkText': 'Link text',
//            'url': 'URL',
//            'size': 'Size',
//            'responsive': '<a href="https://www.jqueryscript.net/tags.php?/Responsive/">Responsive</a>',
//            'text': 'Text',
//            'openIn': 'Open in',
//            'sameTab': 'Same tab',
//            'newTab': 'New tab',
//            'align': 'Align',
//            'left': 'Left',
//            'center': 'Center',
//            'right': 'Right',
//            'rows': 'Rows',
//            'columns': 'Columns',
//            'add': 'Add',
//            'pleaseEnterURL': 'Please enter an URL',
//            'videoURLnotSupported': 'Video URL not supported',
//            'pleaseSelectImage': 'Please select an image',
//            'pleaseSelectFile': 'Please select a file',
//            'bold': 'Bold',
//            'italic': 'Italic',
//            'underline': 'Underline',
//            'alignLeft': 'Align left',
//            'alignCenter': 'Align centered',
//            'alignRight': 'Align right',
//            'addOrderedList': 'Add ordered list',
//            'addUnorderedList': 'Add unordered list',
//            'addHeading': 'Add Heading/title',
//            'addFont': 'Add font',
//            'addFontColor': 'Add font color',
//            'addFontSize' : 'Add font size',
//            'addImage': 'Add image',
//            'addVideo': 'Add video',
//            'addFile': 'Add file',
//            'addURL': 'Add URL',
//            'addTable': 'Add table',
//            'removeStyles': 'Remove styles',
//            'code': 'Show HTML code',
//            'undo': 'Undo',
//            'redo': 'Redo',
//            'close': 'Close'
//          },
//
//          // dev settings
//          useSingleQuotes: false,
//          height: 0,
//          heightPercentage: 0,
//          id: "",
//          class: "",
//          useParagraph: false
//
//        });        
      