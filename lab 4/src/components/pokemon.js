export default async function pokemon() {
  const number = Math.floor(Math.random() * 900)
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${number}`
  )
  let data = await response.json()
  // console.log(number)
  document.querySelector('.page_avatar_wrap').innerHTML = `<img class=\"round_page_avatar_img\" src=${data.sprites.front_default}></img>`
  document.querySelector('.page_name').innerHTML = data.name.toUpperCase()
  document.querySelector('.profile_info').innerHTML = `<div class="clear_fix profile_info_row ">
  <div class="label fl_l">Abilities:</div>
  ${data.abilities
    .map((elem) => {
      return elem.ability.name
    })
    .join(", ")}

</div>`
}
