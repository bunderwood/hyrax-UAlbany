$(document).ready(function(){
    $("#arclight_record_lookup").click(function(){
    	$(this).empty()
    	$(this).append("<i class='fa fa-spinner fa-spin'></i>")
    	if ($("#dao_collection_number")[0]) {
    		$collection = $("#dao_collection_number").val()
			$aspaceID = $("#dao_archivesspace_record").val()
    	} else if ($("#image_collection_number")[0]) {
    		$collection = $("#image_collection_number").val()
    		$aspaceID = $("#image_archivesspace_record").val()
    	} else if ($("#av_collection_number")[0]) {
    		$collection = $("#av_collection_number").val()
    		$aspaceID = $("#av_archivesspace_record").val()
    	} else if ($("#sip_collection_number")[0]) {
    		$collection = $("#sip_collection_number").val()
    		$aspaceID = ""
    	}
    	if ($aspaceID.length < 1) {
    		$arclightURL = "http://arclightURL/catalog/" + $collection + "?format=json"
    	} else {
    		$arclightURL = "http://arclightURL/catalog/" + $collection + "aspace_" + $aspaceID + "?format=json"
    	}	
		$.ajax({
		  type: "GET",
		  dataType: 'json',
		  url: $arclightURL,
		  success: function(data) {
		  	$(".dao_collection_number").removeClass("has-error")
			$(".dao_archivesspace_record").removeClass("has-error")
			$(".image_collection_number").removeClass("has-error")
			$(".image_archivesspace_record").removeClass("has-error")
			$(".av_collection_number").removeClass("has-error")
			$(".av_archivesspace_record").removeClass("has-error")
			$(".sip_collection_number").removeClass("has-error")
			if ('parent_ssm' in data['response']['document']) {
			  	for (i = 0; i < data['response']['document']['parent_ssm'].length; i++) {
			  		if (i == 0) {
			  			$("#dao_collection").val(data['response']['document']['parent_unittitles_ssm'][i].split(",")[0])
			  			$("#image_collection").val(data['response']['document']['parent_unittitles_ssm'][i].split(",")[0])
			  			$("#av_collection").val(data['response']['document']['parent_unittitles_ssm'][i].split(",")[0])
			  		} else if (i == 1) {
			  			$("#dao_record_parent").val(data['response']['document']['parent_ssm'][i].split("_")[1])
			  			$("#image_record_parent").val(data['response']['document']['parent_ssm'][i].split("_")[1])
			  			$("#av_record_parent").val(data['response']['document']['parent_ssm'][i].split("_")[1])
			  		} else {
			  			$(".dao_record_parent").children("ul").append("<li class='field-wrapper input-group input-append'><input class='string multi_value optional form-control digital_archival_object_record_parent form-control multi-text-field' name='digital_archival_object[record_parent][]' value='" + data['response']['document']['parent_ssm'][i].split("_")[1] + "' id='digital_archival_object_record_parent' aria-labelledby='digital_archival_object_record_parent_label' type='text'><span class='input-group-btn field-controls'><button type='button' class='btn btn-link remove'><span class='glyphicon glyphicon-remove'></span><span class='controls-remove-text'>Remove</span> <span class='sr-only'> previous <span class='controls-field-name-text'> Record parent</span></span></button></span></li>")
			  			$(".image_record_parent").children("ul").append("<li class='field-wrapper input-group input-append'><input class='string multi_value optional form-control digital_archival_object_record_parent form-control multi-text-field' name='digital_archival_object[record_parent][]' value='" + data['response']['document']['parent_ssm'][i].split("_")[1] + "' id='digital_archival_object_record_parent' aria-labelledby='digital_archival_object_record_parent_label' type='text'><span class='input-group-btn field-controls'><button type='button' class='btn btn-link remove'><span class='glyphicon glyphicon-remove'></span><span class='controls-remove-text'>Remove</span> <span class='sr-only'> previous <span class='controls-field-name-text'> Record parent</span></span></button></span></li>")
			  			$(".av_record_parent").children("ul").append("<li class='field-wrapper input-group input-append'><input class='string multi_value optional form-control digital_archival_object_record_parent form-control multi-text-field' name='digital_archival_object[record_parent][]' value='" + data['response']['document']['parent_ssm'][i].split("_")[1] + "' id='digital_archival_object_record_parent' aria-labelledby='digital_archival_object_record_parent_label' type='text'><span class='input-group-btn field-controls'><button type='button' class='btn btn-link remove'><span class='glyphicon glyphicon-remove'></span><span class='controls-remove-text'>Remove</span> <span class='sr-only'> previous <span class='controls-field-name-text'> Record parent</span></span></button></span></li>")
			  		}
			  	}
			} else {
				$("#dao_collection").val(data['response']['document']['collection_ssm'][0].split(",")[0])
			  	$("#image_collection").val(data['response']['document']['collection_ssm'][0].split(",")[0])
			  	$("#av_collection").val(data['response']['document']['collection_ssm'][0].split(",")[0])
			  	$("#sip_collection").val(data['response']['document']['collection_ssm'][0].split(",")[0])
			}
			$("#dao_collecting_area").val(data['response']['document']['repository_ssm'])
			$("#image_collecting_area").val(data['response']['document']['repository_ssm'])
			$("#av_collecting_area").val(data['response']['document']['repository_ssm'])
			$("#sip_collecting_area").val(data['response']['document']['repository_ssm'])
		  	$("#dao_date_created").val(data['response']['document']['unitdate_ssm'])
		  	$("#dao_title").val(data['response']['document']['title_ssm'][0].trim())
		  	$("#arclight_record_lookup").empty()
			$("#arclight_record_lookup").text("Load Record")
		  },
		  error: function(){
		  	$(".dao_collection_number").addClass("has-error")
    		$(".dao_archivesspace_record").addClass("has-error")
    		$(".image_collection_number").addClass("has-error")
    		$(".image_archivesspace_record").addClass("has-error")
    		$(".av_collection_number").addClass("has-error")
    		$(".av_archivesspace_record").addClass("has-error")
    		$(".sip_collection_number").addClass("has-error")
    		$("#arclight_record_lookup").empty()
			$("#arclight_record_lookup").text("Load Record")
		  }
		});
    });
});