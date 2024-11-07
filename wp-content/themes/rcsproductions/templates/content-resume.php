<?php
/**
 * Template part for displaying page content in resume
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package rcsproductions
 */

?>

	<?php
	/*
	* rcsproductions_ptags_to_array() - custom function
	* @param - page content
	* @exception - empty value
	* @return - array of P tag elements
	*/

		$postContent = get_the_content();
		$paragraphElements = rcsproductions_ptags_to_array($postContent);




		$items = array();
		foreach ($paragraphElements as $p) {

			$key = substr( $p->nodeValue, 0,strpos($p->nodeValue, ':') );
			$value =  substr( $p->nodeValue, strpos($p->nodeValue, ':') + 1 );

			$items[$key ] = $value;

		}


	?>



	<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
		<div class="col p-4 d-flex flex-column position-static">
			<h3 class="mb-0 padding-bottom"><?php the_title(); ?></h3>
				<?php  if(strpos(get_the_title(), 'Skills') !== false): ?>

					<div class="row skills-block mt-4">
					  <div class="col-4">
					    <div class="list-group" id="list-tab" role="tablist">
								<?php $ct = 0 ?>
								<?php foreach($items as $key => $value) :   ?>

									<a class="list-group-item list-group-item-action skill-group-item <?php if($ct++ == 0) echo 'active' ?>"
											id="list-<?php echo strtolower( preg_replace('/\s+/', '-', $key ) ) ?>-list"
											data-toggle="list"
											href="#list-<?php echo strtolower( preg_replace('/\s+/', '-', $key ) ) ?>"
											role="tab"
											aria-controls="<?php echo strtolower( preg_replace('/\s+/', '-', $key ) ) ?>">
												<?php echo trim($key); ?>
									</a>
								<?php endforeach; ?>
					    </div>
					  </div>
					  <div class="col-8 border rounded">
					    <div class="tab-content" id="nav-tabContent">
								<?php $ct = 0 ?>
								<?php foreach($items as $key => $value) :   ?>
					      <div
									class="tab-pane fade  <?php if($ct++ == 0) echo 'show active'  ?>"
									id="list-<?php echo strtolower( preg_replace('/\s+/', '-', $key ) ) ?>"
									role="tabpanel"
									aria-labelledby="list-<?php echo strtolower( preg_replace('/\s+/', '-', $key ) ) ?>-list">

									<?php

									$skills =   explode(',',$value);

									if($key == "Hackerrank Certifications"){


										$aElements = rcsproductions_atags_to_array($postContent,"Hackerrank");


										foreach ($aElements as $a) {

												$aHref = trim($a->getAttribute('href'));
												$aLabel = trim($a->nodeValue);

												echo "<a role='button' class='badge badge-dark' href='$aHref' target='_blank' rel='noopener noreferrer'>$aLabel <i class='fa fa-external-link'></i></a>&nbsp;";

										}

									}
									else{
										foreach($skills as $skill){
											echo "<span class=\"badge badge-primary\"> $skill</span>&nbsp;";
										}
									}


									?>

								</div>
								<?php endforeach; ?>
					    </div>
					  </div>
					</div>


				<?php elseif(strpos(get_the_title(), 'Language') !== false) :?>
						<?php foreach($items as $key => $value) : ?>
							<div class="card mt-4 lng-block-<?php echo strtolower($key)  ?>">
								<div class="card-header">
									<?php echo $key ?>
								</div>
								<ul class="list-group">
									<?php $lngs =   explode(',',$value) ?>
									<?php foreach($lngs as $lng)  : ?>
										<li class="list-group-item d-flex justify-content-between align-items-center">
											<?php echo $lng; ?>
											<span class="badge badge-primary badge-pill">
												<i class="fa fa-check" aria-hidden="true"></i>
											</span>
										</li>
									<?php endforeach; ?>
								</ul>
							</div>
							<br>
						<?php endforeach; ?>
				<?php else:?>
							<?php the_content(); ?>
				<?php endif; ?>


				<?php if ( get_edit_post_link() ) : ?>
					<footer class="entry-footer">
						<?php
						edit_post_link(
							sprintf(
								wp_kses(
									/* translators: %s: Name of current post. Only visible to screen readers */
									__( 'Edit <span class="screen-reader-text">%s</span>', 'rcsproductions' ),
									array(
										'span' => array(
											'class' => array(),
										),
									)
								),
								wp_kses_post( get_the_title() )
							),
							'<span class="edit-link">',
							'</span>'
						);
						?>
					</footer><!-- .entry-footer -->
				<?php endif; ?>
		</div>
	</div>
