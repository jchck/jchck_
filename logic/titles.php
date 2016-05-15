<?php

namespace Jchck\Titles;

function title(){
	/**
	 *
	 * This controls output of the page title
	 *
	 */
	
	if ( is_home() ) {
		if ( get_option( 'page_for_posts', true ) ) {
			return get_the_title( get_option( 'page_for_posts', true ) );
		} else {
			return __( 'Latest Posts', 'jchck' );
		}
	} elseif ( is_archive() ) {
		return get_the_archive_title();
	} elseif ( is_search() ) {
		return sprintf( __( 'Search Results for %s', 'jchck' ), get_search_query() );
	} elseif ( is_404() ) {
		return __( 'Not Found', 'jchck' );
	} elseif (is_page( 'resume' )) {
		return __( 'Justin Chick Who?', 'jchck' );
	} else {
		return get_the_title();
	}
}

function classes(){
	/**
	 *
	 * This controls the added css classes to the page-title.php <h1> block
	 *
	 */
	if ( is_home() || is_archive()) {
		$home_classes = 'mt0 pt2 bold is_home';
		$classes = $home_classes;
	} elseif ( is_singular() || is_page() ) {
		$classes = 'border-top mt0 mb0 pt2 bold';
	} else {
		$classes = 'not passing';
	}
	return $classes;
}