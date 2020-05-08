import "./styles/style.css"
import pokemon from "./components/pokemon"
import profile from "./components/profile"

document.querySelector("#root").innerHTML = `
<div class="page_layout">
<nav>
    <ol>
        <li id="Pr">Profile</li>
        <li id="Pok">Random Pokemon</li>
    </ol>
</nav>

<div class="column_wrap">
    <div class="narrow_column_wrap">
        <div class="page_block page_photo">
            <div class="page_avatar_wrap">
            </div>
        </div>
    </div>

    <div class="wide_column" id="wide_column" style>
        <div class="page_block">
            <div class="page_info" id="page_info">
                <div class="page_top">
                    <h1 class="page_name">
                    </h1>

                </div>
                <div class="profile_info profile_info_short">
                    <div class="clear_fix profile_info_row ">
                        <div class="label fl_l">Group:</div>
                        <a>M3308</a>
                    </div>
                    <div class="clear_fix profile_info_row ">
                        <div class="label fl_l">City:</div>
                        <a>Saint P.</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`

document.querySelectorAll("li").forEach((el) => [
    el.addEventListener("click", (event) => {
      if (event.target.id === "Pr") {
        profile()
      }
      if (event.target.id === "Pok") {
        pokemon()
      }
    }),
  ])

profile()