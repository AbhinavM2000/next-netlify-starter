import React from "react";
import ReactDOM from "react-dom";

const props = {
  allowFullScreen: true,
  src: "CV.pdf"
};




function App() {
  return (
    <Modal
aria-labelledby='transition-modal-title'
aria-describedby='transition-modal-description'
className={classes.modal}
open={open}
onClose={handleClose}
closeAfterTransition
BackdropComponent={Backdrop}
BackdropProps={{
	timeout: 500,
}}>
<Fade in={open}>
	<div
		className={classes.paper}
		style={{ width: '70%', height: '90%' }}>
		<Grid
			container
			direction='row'
			justify='space-between'
			alignItems='flex-start'
			style={{ marginBottom: '10px' }}>
			<Grid>
				<h4 id='transition-modal-title'>
				</h4>
		        </Grid>
		</Grid>
		<p id='transition-modal-description'
		style={{ width: '100%', height: '95%' }}>
		<embed
		style={{
		        width: '100%',
			height: '100%',
		}}
		type='application/pdf'
		src={pdf}
		/>
		</p>
	</div>
</Fade>
</Modal>
  );
}

