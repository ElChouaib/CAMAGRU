<?php require APPROOT . '/views/inc/header.php'; ?>
<div class="container">
	<h1 style="text-align: center;">Profil</h1>
	<hr class="mt-2 mb-5">
	<div class="row justify-content-center">
		<div class="col-md-6">
			<div class="card">
				<div class="card-body" >
			
				<strong >Username</strong> 
				<div class="form-group form-control form-control-lg">
				<label><?php echo $_SESSION['user_username'];?></label>
			</div>
			<strong>Lastname</strong> 
			<div class="form-group form-control form-control-lg">
				<label><?php echo $_SESSION['user_lastname'];?></label>
			</div>
			<strong>Firstname</strong>
			<div class="form-group form-control form-control-lg">
				<label> <?php echo $_SESSION['user_firstname'];?></label>
			</div>
			<strong>Email</strong>
			<div class="form-group form-control form-control-lg">
				<label> <?php echo $_SESSION['user_email'];?></label>
			</div>
		</div>
	</div>
</div>
</div>
<br>

</div>
<?php require APPROOT . '/views/inc/footer.php'; ?>

<style>
<?php include 'css/style.css'; ?>
</style>