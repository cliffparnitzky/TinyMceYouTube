// @name youtube
// @author Cliff Parnitzky

tinyMCEPopup.requireLangPack();

var YoutubeDialog = {
    init: function () {
        var f = document.forms[0];
        // Get the selected contents as text and place it in the input
        f.youtubeURL.value = tinyMCEPopup.editor.selection.getContent({format: 'text'});
        
        //Add click event form selection
        $(".size-list li.size").each(function(){
            $(this).click(function(){
                $("li.size").removeClass("selected");
                $(this).addClass("selected");
            });
        });
    },
    // Insert the contents from the input into the document
    insert: function () {
        
        //Get Code from URL
        var url = $("#youtubeURL").val();
        if (url === null) {tinyMCEPopup.close();return;}
        
        var code, regexRes, width, height, type;
        regexRes = url.match("[\\?&]v=([^&#]*)");
        code =  $.trim( (regexRes === null) ? url : regexRes[1] );
        if (code === "") {tinyMCEPopup.close();return;}
        
        //Get Size
        width = $("li.selected label input").attr("data-width");
        height = $("li.selected label input").attr("data-height");
        
        //Get Custom size
        if(width == -1 && height == -1){
            width = $("input.size-custom-width").val();
            height = $("input.size-custom-height").val();
        }
        
        //No size or Some Error Accured
        if(width == "" || width == "undefined" || height == "" || height == "undefined"){
            alert("Error: No size selected");tinyMCEPopup.close();return;
        }
        
        //Get insert type
        type = $("input[name='yType']:checked").val();
        
        //No type or Some Error Accured
        if(type == "" || type == "undefined"){
            alert("Error: No type selected");tinyMCEPopup.close();return;
        }
        
        //Insert to edditor
        var iFrame = '<iframe width="'+width+'" height="'+height+'" src="http://www.youtube.com/embed/'+code+'?rel=0" frameborder="0" allowfullscreen></iframe>';
        tinyMCEPopup.editor.execCommand('mceInsertContent', false, iFrame);
        
        //Close
        tinyMCEPopup.close();
        
        
    }
};
tinyMCEPopup.onInit.add(YoutubeDialog.init, YoutubeDialog);