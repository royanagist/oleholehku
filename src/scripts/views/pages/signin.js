const Signin = {
  async render() {
    return `
    <div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
                <form action="" class="mt-5 border p-4 bg-light shadow">
                    <h4 class="title-login mb-5 text-secondary text-center">Sign In</h4>
                    <div class="row">
                        <div class="mb-3 col-md-12">
                          <label>Username<span class="text-danger">*</span></label>
                          <input type="text" name="usrname" class="form-control" placeholder="Enter Username">
                        </div>

                        <div class="mb-3 col-md-12">
                            <label>Password<span class="text-danger">*</span></label>
                            <input type="password" name="password" class="form-control" placeholder="Enter Password">
                        </div>

                        <div class="col-md-12">
                           <button class="btn btn-signin btn-warning float-end">Sign In</button>
                        </div>
                    </div>
                </form>
                <p class="text-center mt-3 text-secondary">Don't have an account? <a href="signup.html">Sign Up</a></p>
            </div>
        </div>
    </div>
    </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Signin;