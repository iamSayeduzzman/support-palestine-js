document.addEventListener("DOMContentLoaded", function() {
    
    var banner = document.createElement("div");

    
    banner.style.backgroundColor = "#3B1C1A"; 
    banner.style.color = "#ffffff";          
    banner.style.display = "flex";            
    banner.style.justifyContent = "center";   
    banner.style.alignItems = "center";
    banner.style.padding = "12px 20px";
    banner.style.fontFamily = "Arial, sans-serif";
    banner.style.fontSize = "18px";
    banner.style.fontWeight = "bold";         
    banner.style.zIndex = "9999";             

    banner.innerHTML = `
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg" alt="Palestine Flag" style="width: 45px; height: auto; margin-right: 15px; border: 1px solid #000;">
        <div>
        <!-- use your link in href instead of mine github @iamsayeduzzman link -->

            <a href="https://github.com/iamSayeduzzman/" target="_blank" style="color: #ffffff; text-decoration: underline; text-underline-offset: 4px;">Support Palestine.</a>
            <span> Stop The Zionist Occupation on Palestine.</span>
        </div>
    `;
    document.body.insertBefore(banner, document.body.firstChild);
});