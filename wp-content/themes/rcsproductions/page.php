<?php
/**
 *	Template Name: RCSDefault Template
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
			<div class="col-md-12" id="post-<?php the_ID(); ?>">
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
		</div>
	</main><!-- #main -->

<?php
get_footer();
