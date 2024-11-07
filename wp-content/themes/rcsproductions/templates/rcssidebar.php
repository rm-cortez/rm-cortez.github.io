<?php
/**
 *	Template Name: RCSsidebar Template
 *
 * This is the template that displays all pages by default.
 *
 */

get_header();
?>

	<main id="primary" class="site-main">

		<div class="row">
		<?php while ( have_posts() ) : ?>
			<?php the_post(); ?>
			<div class="col-md-8" id="post-<?php the_ID(); ?>">
				<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
					<div class="col p-4 d-flex flex-column position-static">
						<?php the_title('<h1 class="entry-title">', '</h1>' ); ?>
						<?php the_content(); ?>

						<footer class="entry-footer">
							<?php rcsproductions_entry_footer(); ?>
						</footer><!-- .entry-footer -->
					</div>
				</div>
			</div>
		<?php endwhile; // End of the loop.?>


		<div class="col-md-4  mb-4">
				<?php //get_sidebar();

				$posts = new WP_Query( array(
																			'category_name' => 'resume, Uncategorized',
																			'order'    => 'asc',

																		));
				?>


				<?php while ($posts->have_posts() ) : ?>
					<?php $posts->the_post(); ?>
					<div class="col p-4 border rounded sidebar-elements mb-4 bg-light">
							<?php the_title('<h2 class="entry-title">', '</h2>' ); ?>

							<?php

							if(has_category('resume', $posts->the_post) ) {

								$theContent = get_the_content();
								$theContent = preg_replace('/:/', '<br>',  $theContent);
								$theContent = preg_replace('/https<br>/', 'https://', $theContent );
								$theContent = preg_replace('/http<br>/', 'http://', $theContent );

								echo  $theContent;


							}
							else{
								the_content();
							}
							?>
					</div>
				<?php endwhile; // End of the loop.?>

				<?php wp_reset_postdata(); ?>
		</div>

		</div>
	</main><!-- #main -->

<?php

get_footer();
