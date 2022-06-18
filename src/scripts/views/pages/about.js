import snackbar from 'node-snackbar';
import addProfileImage from '../../utils/profile-image';
import { isUserSignedIn } from '../../firebase/auth';

const About = {
  async render() {
    return `
    
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container">
            <div class="row content">
                    <div class="section-title">
                        <h2>Tentang Oleholehku</h2>
                    </div>
                <div>
                    <p>
                        Belanja oleh-oleh tentu sudah menjadi kewajiban bagi seorang wisatawan ketika sedang mengunjungi sebuah destinasi wisata. 
                        Oleholehku hadir sebagai website yang membantu wisatawan memperoleh informasi mengenai oleh-oleh yang ada di suatu daerah. 
                        Website Oleholehku mempunyai fitur utama sebagai berikut :
                    </p>
                    <ul>
                        <li><i class="fas fa-check-square"></i> Mencari <a href="#/explore/">informasi</a> oleh-oleh menurut daerahnya.</li>
                        <li class="recom-link"><i class="fas fa-check-square"></i> Memberikan <a href="#/recommendation/">rekomendasi</a> oleh-oleh.</li>
                        <li><i class="fas fa-check-square"></i> Memberikan <a href="#/explore/">vote</a> untuk rekomendasi terbaik di suatu daerah.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- ======= Team Section ======= -->
    <section id="team" class="team">
        <div class="container">
            <div class="row">
                <div class="section-title">
                    <h2>Team</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="member" >
                        <div class="pic"><img id="royan" class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Royan</h4>
                            <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                            <div class="social">
                                <a href="https://www.instagram.com/royanagist/"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/royan-agist-ramadhan-33938919a/"><i class="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4 mt-lg-0">
                    <div class="member">
                        <div class="pic"><img id="fannisa" class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Fannisa</h4>
                            <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                            <div class="social">
                                <a href="https://www.instagram.com/fannisatiara_/"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/fannisa-tiara-salsabila-901048231/"><i class="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4">
                    <div class="member">
                        <div class="pic"><img id="yoga" class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Yoga</h4>
                            <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                            <div class="social">
                                <a href="https://www.instagram.com/yogaanggoroo/"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/firdaus-yoga-anggoro-b2136721b/"><i class="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4">
                    <div class="member">
                        <div class="pic"><img id="nadia" class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Nadia</h4>
                            <p>"Setiap akhir adalah awal dari sesuatu yang baru"</p>
                            <div class="social">
                                <a href="https://www.instagram.com/nadianuraaa/"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/nadianura/"><i class="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </section><!-- End Team Section -->
        `;
  },

  async afterRender() {
    addProfileImage.addRoyanImage();
    addProfileImage.addFannisaImage();
    addProfileImage.addYogaImage();
    addProfileImage.addNadiaImage();
    const recommendationLink = document.querySelector('.recom-link');
    recommendationLink.addEventListener('click', (e) => {
      if (!isUserSignedIn()) {
        e.preventDefault();
        snackbar.show({
          text: 'You must sign in first',
          pos: 'top-center',
          backgroundColor: '#ffcd38',
          textColor: 'black',
          actionTextColor: 'black',
          actionText: '<i class="fa-solid fa-xmark"></i>',
          duration: 3000,
          customClass: 'customSnackbar',
        });
      }
    });
  },
};

export default About;
