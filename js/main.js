let elList = document.querySelector(".pokemon-list")
let elContent = document.querySelector(".content")
let elSelect = document.querySelector(".select")
let elInput = document.querySelector(".input")
let elBtn = document.querySelector(".button")
let elLike = document.querySelector(".like-btn")
function pokemonFunc(arr,list){
  elList.innerHTML = ""
    arr.forEach(value => {
        let elItem = document.createElement("li")
        elItem.innerHTML = `
        <img src="${value.img}" alt="${value.name}" >
        <div class="flex items-center justify-between">
            <div>
                <h2>${value.name}</h2>
                <p>Type: ${value.type[0]}</p>
            </div>
            <div class="flex items-center gap-[10px]">
                 <button onclick={clickLike(${value.id})} class="like-btn  px-[10px] py-[7px] rounded-[8px]  text-white bg-green-600">
                       <svg
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                        xmlns:cc="http://creativecommons.org/ns#"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                        xmlns:svg="http://www.w3.org/2000/svg"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                        width="25"
                        height="20"
                        viewBox="0 0 400 400.00001"
                        id="svg2"
                        version="1.1"
                        inkscape:version="0.91 r13725"
                        sodipodi:docname="like.svg">
                       <defs
                          id="defs4" />
                       <sodipodi:namedview
                       id="base"
                       pagecolor="#ffffff"
                       bordercolor="#666666"
                       borderopacity="1.0"
                       inkscape:pageopacity="0.0"
                       inkscape:pageshadow="2"
                       inkscape:zoom="1.4"
                       inkscape:cx="90.721604"
                       inkscape:cy="166.49755"
                       inkscape:document-units="px"
                       inkscape:current-layer="layer1"
                       showgrid="false"
                       units="px"
                       showguides="true"
                       inkscape:guide-bbox="true"
                       inkscape:window-width="1920"
                       inkscape:window-height="1056"
                       inkscape:window-x="0"
                       inkscape:window-y="24"
                       inkscape:window-maximized="1">
                       <sodipodi:guide
                        position="200.71429,121.42857"
                          orientation="1,0"
                          id="guide23298" />
                     </sodipodi:namedview>
                     <metadata
                        id="metadata7">
                       <rdf:RDF>
                         <cc:Work
                            rdf:about="">
                           <dc:format>image/svg+xml</dc:format>
                           <dc:type
                              rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                           <dc:title>

                   </dc:title>
                         </cc:Work>
                       </rdf:RDF>
                      </metadata>
                     <g
                        inkscape:label="Capa 1"
                        inkscape:groupmode="layer"
                        id="layer1"
                        transform="translate(0,-652.36216)">
                       <path
                          style="fill:${value.islike == true ? "red" : "white"};fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                          d="m 98.133214,652.38729 c -11.7545,0.2341 -24.353,3.6716 -37.7047,11.493 -103.624,60.7034 -84.4526,232.3336 139.886396,388.38891 l 0,0.093 c 0.027,-0.016 0.053,-0.032 0.081,-0.048 0.027,0.016 0.052,0.032 0.079,0.048 l 0,-0.093 c 221.3186,-145.95385 243.5122,-327.68551 139.8881,-388.38891 -84.7806,-49.6647 -139.1183,77.2371 -139.9667,79.2336 -0.7118,-1.6752 -39.3752,-91.9795 -102.261996,-90.7266 z"
                          id="path23380"
                          inkscape:connector-curvature="0"
                          sodipodi:nodetypes="cscccccsccc" />
                     </g>
                   </svg>
                 </button>
                 <button onclick={clickMore(${value.id})} class=" py-[5px] px-[5px] rounded-[8px]  text-white bg-orange-500">
                 <svg width="35" height="25" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">

<title/>

<g id="Complete">

<g id="F-More">

<path d="M8,12a2,2,0,1,1-2-2A2,2,0,0,1,8,12Zm10-2a2,2,0,1,0,2,2A2,2,0,0,0,18,10Zm-6,0a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z" id="Horizontal"/>

</g>

</g>

</svg>
                 </button>
            </div>
        </div>
        `
        elItem.className = "item w-[250px] shadow-2xl p-3 rounded-[40px] flex flex-col justify-center"
        elList.append(elItem)
    });
}
pokemonFunc(pokemons,elList)

function clickMore(id){
    let {img, name, type, weight, candy,candy_count, egg, spawn_time} = pokemons.find(item => item.id == id)
    elContent.innerHTML = `
     <div class="flex items-center justify-center"> 
         <img src="${img}" alt="" width="200" height="200">
     </div>
     <p>Id: ${id}</p>
     <p>Name: ${name}</p>
     <p>Type: ${type}</p>
     <p>Weight: ${weight}</p>
     <p>Candy: ${candy}</p>
     <p>Candy count: ${candy_count}</p>
     <p>Egg: ${egg}</p>
     <p>Spawn time: ${spawn_time}</p>
    `
}


function clickLike(id){
  let findedObj = pokemons.find(item => item.id == id )
  findedObj.islike = !findedObj.islike
  if(findedObj.islike){
    document.getElementById("like-count").textContent = document.getElementById("like-count").textContent - 0 + 1
  }
  else{
    document.getElementById("like-count").textContent = document.getElementById("like-count").textContent - 0 - 1
  }
  pokemonFunc(pokemons,elList)
}

elBtn.addEventListener("click", () => {
  let likedList = pokemons.filter(value => value.islike == true)
  pokemonFunc(likedList,elList)
})

pokemons.forEach(value => {
  let elOption = document.createElement("option")
  elOption.innerHTML = `${value.name}`
  elOption.setAttribute("value", value.name)
  elSelect.append(elOption)
})

elSelect.addEventListener("change", (event) =>{
  if(event.target.value == "all"){
    pokemonFunc(pokemons,elList)
  }
  else{
    let elSelectedElement = pokemons.filter(item => item.name == event.target.value)
    pokemonFunc(elSelectedElement,elList)
  }
})

elInput.addEventListener("keyup", (event) => {
  if(Number(event.target.value)){
    let filterList = pokemons.filter(item => String(item.id).includes(event.target.value.trim()))
    pokemonFunc(filterList,elList)
}
else{
    let filterList = pokemons.filter(item => item.name.toLowerCase().includes(event.target.value.trim().toLowerCase()))
    pokemonFunc(filterList,elList)
}
})

