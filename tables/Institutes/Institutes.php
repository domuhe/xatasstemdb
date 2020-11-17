<?php

class tables_Institutes{

	// make list view columns wider than auto (but will not reduce to less than auto value)
	function InstituteCountry__renderCell(&$record){
		return '<div style="width:50px">'.$record->display('InstituteCountry').'</div>';
	}

	// changes color for even rows
	function block__head(){
		echo "<style>
			.listing .even {
				background-color: #aaaaaa;
			}
		</style>";
	}

	

}

?>


