const ease = [0.17, 0.67, 0.83, 0.67]



export const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.1,
			duration: 0.5,
			type: 'tween',
      ease: ease
		}
	}
};

export const stagger = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3
		}
	}
};

export const routeFade = {
	initial: {
		x: -100,
		opacity: 0
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.1,
			duration: 0.5,
			type: 'tween'
			/*   dampness: 20,
          stiffness: 300 */
		}
	},
	exit: {
		opacity: 0,
		transition: {
			delay: 0.1,
			ease: 'easeInOut'
		}
	}
};
