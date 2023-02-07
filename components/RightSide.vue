<template>
    <div class="right-container">
        <div class="right-container-body">
            <p class="content-header">Birthdays</p>
            <div class="birthday-body">
                <i data-visualcompletion="css-img" class="x1b0d499 xl1xv1r"
                    style="height:36px;width:36px;background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/xNxnzn9NQYM.png');background-position:0 0;background-size:auto;background-repeat:no-repeat;display:inline-block"></i>
                <div class="birthday-body-content">
                    <p class="name">Md: Mahmudul Islam`s </p>
                    <p class="name-title">birthday is today.</p>
                </div>
            </div>
            <hr>
            <div class="contact-body">
                <div class="contact-content">
                    <p class="contact-title">Contacts</p>
                    <div class="img-title">
                        <img class="video-img" src="../img/video-solid.svg" alt="">
                        <img class="search-img" src="../img/icons8-search.svg" alt="">
                        <img class="more-img" src="../img/icons8-more-24.png" alt="">
                    </div>
                </div>

                <div class="contact-men">
                    <img class="men-profile" src="https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/309860881_106948362201197_6916636301056234676_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mY03I4fG-PwAX_Aua-p&tn=q8ZIaHmfuPKs0I_d&_nc_ht=scontent.frjh1-1.fna&oh=00_AfB-WutPJSXZVZoZI7OXRfijmbiZ0yBL-72k0K-K-mKvFQ&oe=63E7DACB"
                        alt="">
                        <div class="dash-active"></div>
                    <p class="men-title">Md Zubayer Shekh</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.right-container {
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 9px;
    display: flex;
    // text-align: center;
    // align-items: left;
    justify-content: center;
    line-height: 0.8;
    padding-left: 11rem;

    .right-container-body {
        // display: flex;
        padding-right: 10px;

        .content-header {
            font-size: 18px;
            color: gray;
            font-weight: bold;
        }

        .birthday-body {
            display: flex !important;
            align-items: center;
            justify-content: space-between !important;

            &:hover {
                background: rgb(212, 216, 214);
                cursor: pointer;
                border-radius: 10px;
            }

            .birthday-body-content {
                display: flex;
                padding: 6px 0 0 15px;
                line-height: 0.6;

                .name {
                    font-size: 16px;
                    font-weight: bold;
                }

                .name-title {
                    font-size: 15px;
                    padding-left: 15px;
                }
            }
        }

        .contact-body {
            display: inline;
            justify-content: space-between;

            .contact-content {
                display: flex;
                align-items: center;
                justify-content: space-between;


                .contact-title {
                    font-size: 17px;
                    font-weight: bold;
                    color: gray;
                }

                .img-title {

                    .video-img {
                        height: 20px;
                        width: 20px;
                        margin-right: 25px;

                        &:hover {
                            cursor: pointer;
                            background: #d1d3d6;
                            border-radius: 100%;
                        }
                    }

                    .search-img {
                        align-items: center;
                        margin-right: 15px;

                        &:hover {
                            cursor: pointer;
                            background: #d1d3d6;
                            border-radius: 100%;
                        }
                    }

                    .more-img {
                        // padding-left:5px;

                        &:hover {
                            cursor: pointer;
                            background: #d1d3d6;
                            border-radius: 100%;
                        }
                    }
                }

            }

            .contact-men {
                display: flex;
                align-items: center;
                padding: 5px;

                &:hover {
                    background: #E3E5E8;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .men-profile {
                    height: 40px;
                    width: 40px;
                    border-radius: 50%;
                    position: relative;
                }

                .dash-active {
                    height:10px;
                    width:10px;
                    border-radius: 5px;
                    background: green;
                    top: 15px;
                    right:9px;
                    position: relative;
                }
                .men-title {
                    font-size: 16px;
                    color: rgb(66, 65, 65);
                    
                    padding-left: 20px;
                }
            }
        }



    }
}
</style>