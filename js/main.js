let elList = document.querySelector(".pokemon-list")


function pokemonFunc(arr,list){
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
                 <button class="px-[10px] py-[5px] rounded-[8px]  text-white bg-green-600">Like</button>
                 <button class="py-[5px] px-[5px] rounded-[8px]  text-white bg-orange-500">More</button>
            </div>
        </div>
        `
        elItem.className = "item w-[250px] shadow-2xl p-3 rounded-[40px] flex flex-col justify-center"
        elList.append(elItem)
    });
}
pokemonFunc(pokemons,elList)