<?php require APPROOT . '/views/inc/header.php'; ?>

<div class="container">
	<div class="row " >
		
			
		<div class="col-8">
			<div class="card">
			<?php flash('posts');?>
					<div class="card-header">
						<h2 style="text-align: center;">CAMERA</h2>
					</div>
					
				
					<div class="card-body">
						
					<div  style='position: relative;' id = "mydiv">
						<video class="img-fluid border border-dark" id="video" height="480" width="640"></video>
						<img  src ='' id = 'imgcadre' style='position: absolute;top: 0px;left: 0px;display: none; width: 100%; height: 100%;'>
						<img  src ='' id = 'imgf' style='position: absolute;top: 200px;left: 0px;display: none; width: 12.5%; height: 12.5%;'>
					</div>
					<!-- filter button elchouai -->
					<div id="filterButtons">
					<div class="row">
						<div class="col">
							<img src="../public/img/Emoji/1.png" alt="Emoji" height="40px" width="40px">
							<input type="radio" id="1" name="filter" value = '../public/img/Emoji/1.png'>
						</div>
						<div class="col">
							<img src="../public/img/Emoji/2.png" alt="Emoji" height="40px" width="40px">
							<input type="radio" id="2" name="filter" value = '../public/img/Emoji/2.png'>
						</div>
						<div class="col">
							<img src="../public/img/Emoji/3.png" alt="Emoji" height="40px" width="40px">
							<input type="radio" id="3" name="filter" value = '../public/img/Emoji/3.png'>
						</div>
						<div class="col">
							<img src="../public/img/Emoji/4.png" alt="Emoji" height="40px" width="40px">
							<input type="radio" id="4" name="filter" value = '../public/img/Emoji/4.png'>
						</div>	
					</div>
					<div class="row">
						<div class="col">
							<img src="../public/img/Emoji/5.png" alt="Emoji" height="40px" width="40px">
							<input type="radio" id="5" name="cadre" value = '../public/img/Emoji/5.png'>
						</div>
						<div class="col">
							<img src="../public/img/Emoji/6.png" alt="Emoji" height="40px" width="40px">
							<input type="radio" id="6" name="cadre" value = '../public/img/Emoji/6.png'>
						</div>
						<div class="col">
							<img src="../public/img/Emoji/7.png" alt="Emoji" height="40px" width="40px">
							<input type="radio" id="7" name="cadre" value = '../public/img/Emoji/7.png'>
						</div>
						<div class="col">
							<img src="../public/img/Emoji/8.png" alt="Emoji" height="40px" width="40px">
							<input type="radio" id="8" name="cadre" value = '../public/img/Emoji/8.png'>
						</div>	
					</div>
					<br>		
					</div>
					<!-- filter button elchouai -->
					<br>
						<button class="btn btn-success btn-block " id="snap" disabled>
							SNAP</button>
							<br>
						<div style='position: relative;'>
							<canvas class="img-fluid border border-dark" id="canvas" height="480" width="640"></canvas>
							<img src ='' id = 'canvasf' style='position: absolute;top: 10px;left: 10px;display: none; width: 30%; height: 30%;'>
							
						
						</div>	
					</div>

					<div class="card-footer">

						
							
						
							<div class="input-group">

  								
  								<div class="custom-file">
   									<input type="file"  id="file" class="custom-file-input" accept=".png, .gif, .jpg, .jpeg">
    								<label class="custom-file-label">Upload</label>
  								</div>
  								
							</div>
							<br>
							<button class="btn btn-info" id="clear" >CLEAR</button> <br>
  							<button class="btn btn-success" id="save" disabled style="text-align:center;">Save</button>
						


					</div>
				</div>
				</div>
				
				<br>
				
					<div class="card col-4" >
						<div style="width:100%;height: 1250px; overflow-y:auto; overflow-x:hidden;">
					<div class="card-header">
						<h2 style="text-align: center;">GALERIE</h2>
					</div>
					<div class="card-body auto" style="width:100%" id = "galerie">

						<?php foreach($data as $posts):?>

							<div class="container" id = "galerie">
      							<a  class="d-block mb-4 h-100">
								  <form action="<?php echo  URLROOT;?>/posts/deletePost" method="POST">
								  	<div class="container">
									  	<img class="img-fluid img-thumbnail" src="<?php echo $posts->path;?>" >
									  	<button type="submit" name="submit"class="btn btn-danger">Delete</button>  		
									</div>
            						<input  name="postId" type="hidden" value="<?php echo $posts->posts_id;?>">
            					  </form>
            					
         						</a>
    						</div>		
    					<?php endforeach;?>
					</div>
				</div>
			</div>
				</div>
				
				
	

</div>
<script src="<?php echo URLROOT;?>/js/image.js"></script>
<?php require APPROOT . '/views/inc/footer.php'; ?>	
