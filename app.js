const $display = $("#display");
const $form = $("form");
const $clearAll = $("button");

const api_key = "nGswyaOEKowKALHmXPxhV1QNOV8cBtes";
const url = "https://api.giphy.com/v1/gifs/search";


function createImage(url){
    const $img = $("<img>",{class:"col-log-4 m-4"})
    $img.attr("src",url)
    return $img
}


async function getURL(val){
    const response = await axios.get("https://api.giphy.com/v1/gifs/search",{params:{api_key,q:val,limit:1}})
    return response.data.data[0].images.downsized_large.url
}


async function handleCallback(e){
    e.preventDefault()
    const $searchValue = $("input[type=\"text\"]").val()
    getURL($searchValue)
    .then(url => {
        $display.append(createImage(url))
        $form.trigger("reset")
    })
}

$form.on("submit",handleCallback)
$clearAll.click(function(){
    $display.empty()
})