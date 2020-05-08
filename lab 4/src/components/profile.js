export default function profile() {
    document.querySelector('.page_name').innerHTML = "Ilya Vinnikov😎"
    document.querySelector('.page_avatar_wrap').innerHTML = "<img class=\"page_avatar_img\" src=\"./styles/durov.jpg\"></img>"
    document.querySelector('.profile_info').innerHTML = `<div class="clear_fix profile_info_row ">
                                                             <div class="label fl_l">Group:</div>
                                                                <a>M3308</a>
                                                            </div>
                                                        <div class="clear_fix profile_info_row ">
                                                            <div class="label fl_l">City:</div>
                                                            <a>Saint P.</a>
                                                        </div>`
}