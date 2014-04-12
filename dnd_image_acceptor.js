function dnd_image_acceptor(o){
	if(typeof o.elem == 'string'){
		this.el = document.getElementById(o.elem)
	}else{
		this.el = o.elem;
	}

	this.callback = o.callback;
	var _this = this;

	this.el.ondragover = function (e) { 
		e.preventDefault();
		return false;
	};

    this.el.ondragend = function (e) { 
	    e.preventDefault();
	    return false;
    };
 
    this.el.ondrop = function(e){
    	e.preventDefault();

    	var imageReader = new FileReader();
    	
    	imageReader.onload = function(e){
    		var img = new Image();
    		img.onload = function(){
    			_this.callback(this);
    		};
    		img.src = e.target.result; 
    	};

    	imageReader.readAsDataURL(e.dataTransfer.files[0]);

    	return false;
    };
}