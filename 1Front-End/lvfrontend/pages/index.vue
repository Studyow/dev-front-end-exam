<script setup lang="ts">
const { data: homepage } = await useFetch('https://super7tech.com/developer_exam/api/homePage')
</script>
<!-- offers obj-->
<!-- content -->
<!-- services obj-->

<template>
  <div>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="https://kongsiole777.com/images/banner-new.webp" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h2>50% INSTANT KOMISI AFILIASI</h2>
              <h5>TAMBAH PENGHASILAN ANDA, PASSIVE INCOME MENGGIURKAN!</h5>
              <div class="mt-3"><SignUpForm/></div>
              
            </div>
        </div>
      </div>
    </div>
  </div>

  <!-- offers -->
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col-md-4 my-4" 
      v-for="offer of homepage.offers" :key="offer.id">
        <img :src="offer.img" width="100%" class="rounded mx-auto"/>
      </div>
    </div>
  </div>

  <!-- content -->
  <div class="bg-secondary">
    <div class="container py-5">
      <div class="row py-5">
        <div class="card shadow-lg p-3 mb-5 bg-body rounded">
          <div class="card-body">
            <h5><strong>Kongsi OLE777</strong>
              is an OLE777 Affiliate football program that provides members and non-members with income from the OLE777 platform.
              Established in 2014, OLE777 provides online entertainment with comfort, product quality, the best customer service,
              and benefits for all players and members of the OLE777 Affiliate Football Company.
            </h5>
            <br><br>

              <h4>Steps to get commission by becoming an OLE777 Share:</h4>
              <div class="card mb-3" style="width: 75%;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><i class="bi bi-1-circle-fill me-3" style="font-size: 2rem; color: cornflowerblue;"></i>Register by clicking the "Register Now" button or via the link provided by our team.</li>
                  <li class="list-group-item"><i class="bi bi-2-circle-fill me-3" style="font-size: 2rem; color: cornflowerblue;"></i>Register</li>
                  <li class="list-group-item"><i class="bi bi-3-circle-fill me-3" style="font-size: 2rem; color: cornflowerblue;"></i>Share the special link you got from your account.</li>
                  <li class="list-group-item"><i class="bi bi-4-circle-fill me-3" style="font-size: 2rem; color: cornflowerblue;"></i>You can share the link via your social media accounts, such as Facebook, Instagram, YouTube, Twitter, etc.</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>


  <!-- services obj-->
  <div class="container-fluid text-center">
    <div class="row my-4">
      <div class="col-md-3 mb-4" 
      v-for="service of homepage.services" :key="service.id">

      <div 
        class="card py-5"
      >
        <img :src="service.img" width="100%" height="200px" class="rounded mx-auto"/>
        <div class="card-body">
          <h5 class="card-title">{{ service.title }}</h5>
          <p class="card-text px-5 pt-3">{{ service.description }}</p>
        </div>
      </div>
        
        
        
      </div>
    </div>
  </div>


</template>
<style scoped></style>