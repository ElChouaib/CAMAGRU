<script>
function showdiv()
{
  document.getElementById("navbar").className = "navbar navbar-expand-lg navbar-danger bg-danger mb-3";
}

function hidediv()
{
  document.getElementById("navbar").className = "navbar navbar-expand-lg navbar-light bg-light";
}
</script>



<nav id="navbar"class="navbar navbar-expand-lg navbar-light bg-light" onmouseleave="hidediv()" onmouseenter="showdiv()">
      <a class="navbar-brand" href="<?php echo URLROOT; ?>/posts/home"><i class="fab fa-instagram"></i>   <?php echo SITENAME; ?></a>

      <button id = "btn" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <?php if(isset($_SESSION['user_id'])) : ?>
            <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link text-white" href="<?php echo URLROOT; ?>/users/profile"><?php echo $_SESSION['user_username'];?></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="<?php echo URLROOT; ?>/posts/image"><i class="fas fa-images"></i></a>
          </li>
          <li class="nav-item">
            
            <a class="nav-link text-white" href="<?php echo URLROOT; ?>/users/edit"><i class="far fa-edit"></i></a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link text-white" href="<?php echo URLROOT; ?>/users/logout?token=<?php echo $_SESSION['cle']?>"><i class="fas fa-sign-out-alt"></i></a>
          </li>
          
        </ul>
        <?php else :?>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link text-white" href="<?php echo URLROOT; ?>/users/registration">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="<?php echo URLROOT; ?>/users/login"><i class="fas fa-sign-in-alt"></i></a>
          </li>
        </ul>
      <?php endif;?>
      </div>
        </nav>