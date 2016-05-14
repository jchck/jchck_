<?php

namespace Jchck\Excerpt;

function excerpt(){
	/**
	 *
	 * Check to see if current post has an excerpt and if so get it
	 * @see https://codex.wordpress.org/Function_Reference/has_excerpt
	 * @see https://developer.wordpress.org/reference/functions/the_excerpt
	 *
	 */
	
	if (has_excerpt( )) {
		$excerpt = the_excerpt();
	} else {
		$excerpt = null;
	}
	return $excerpt;
}

function clean(){
	/**
	 *
	 * This removes default [...] from end of the_excerpt()
	 * @see https://codex.wordpress.org/Plugin_API/Filter_Reference/excerpt_more
	 *
	 */
	
	return '';
}

add_filter('excerpt_more', __NAMESPACE__ . '\\clean');

function classes($excerpt){
	/**
	 *
	 * Add classes to the exerpt
	 * @see http://php.net/manual/en/function.str-replace.php
	 * @see https://developer.wordpress.org/reference/functions/the_excerpt
	 *
	 */
	
	return str_replace('<p', '<p class="h2"', $excerpt);
}
add_filter('the_excerpt', __NAMESPACE__ . '\\classes');