//your JS code here. If required.
const removeBtn = document.querySelector("input[type='button']")
            const selectBar = document.getElementById("colorSelect")
            // console.log(selectBar, "Drop Down")
            removeBtn.addEventListener("click",removeColorElement)

            function removeColorElement(){
                const selectIndex = selectBar.selectedIndex
                // console.log(selectIndex)

                if(selectIndex !== -1){
                    selectBar.remove(selectIndex)
                }

            }