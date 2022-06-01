import addProfileImage from '../../utils/profile-image';

const Home = {
  async render() {
    return `
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
        <div class="container text-center position-relative">
            <h1>Explore The Uniqueness Of Indonesia</h1>
            <h2>Let's Bring Some Memorable Goodies Back Home</h2>
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
        </div>
    </section><!-- End Hero -->
    
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container">
            <div class="row content">
                <div class="col-lg-6">
                    <div class="section-title">
                        <h2>About Oleholehku</h2>
                    </div>
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0">
                    <p>
                        Belanja oleh-oleh tentu sudah menjadi kewajiban bagi seorang wisatawan ketika sedang mengunjungi sebuah destinasi wisata. 
                        Oleholehku hadir sebagai website yang membantu wisatawan memperoleh informasi mengenai oleh-oleh yang ada di suatu daerah. 
                        Website Oleholehku mempunyai fitur utama sebagai berikut :
                    </p>
                    <ul>
                        <li><i class="fas fa-check-square"></i> Mencari informasi oleh-oleh menurut daerahnya.</li>
                        <li><i class="fas fa-check-square"></i> Memberikan rekomendasi oleh-oleh.</li>
                        <li><i class="fas fa-check-square"></i> Memberikan vote untuk rekomendasi terbaik di suatu daerah.</li>
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
                                <a href=""><i class="fa-brands fa-instagram"></i></a>
                                <a href=""><i class="fa-brands fa-linkedin"></i></a>
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
                                <a href=""><i class="fa-brands fa-instagram"></i></a>
                                <a href=""><i class="fa-brands fa-linkedin"></i></a>
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
                                <a href=""><i class="fa-brands fa-instagram"></i></a>
                                <a href=""><i class="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mt-4">
                    <div class="member">
                        <div class="pic"><img id="nadia" class="img-fluid" alt=""></div>
                        <div class="member-info">
                            <h4>Nadia</h4>
                            <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                            <div class="social">
                                <a href=""><i class="fa-brands fa-instagram"></i></a>
                                <a href=""><i class="fa-brands fa-linkedin"></i></a>
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
  },
};

export default Home;