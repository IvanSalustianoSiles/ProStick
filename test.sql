
    /**Filters on specific list pulls - these filters vary based on request, so are in WHERE clause for easier editing**/

    				/**ORG CLASSIFCATION**/

    		AND  (

    				IsNull(IPV.[SegmentName],'UnSegmented')/*UCMP_V1.2_UPDATE REPLACED(IPV.InferredSegment)*/ in (
					'Major Commercial',
					--Major Public Sector,
					--Small, Medium & Corporate Commercial,
					--Small, Medium & Corporate Public Sector,
					--Strategic Commercial,
					--Strategic Public Sector,
					--High Value Individual,
					--UnSegmented

    				)

    				AND  IsNull(IPV.[SubSegmentName],'UnSegmented') in /*UCMP_V1.2_UPDATE REPLACED(IPV.InferredSubSegment)*/ (
					'Major - Commercial Other', 
					'Major - Health', 
					'Major - Other', 
					--Major - Education, 
					--Major - Federal Government, 
					--Major - Government Other, 
					--Major - State & Local Governments, 
					--SM&C Commercial - Corporate, 
					--SM&C Commercial - SMB Default, 
					--SM&C Commercial - SMB, 
					--SM&C Education - Corporate, 
					--SM&C Education - SMB, 
					--SM&C Government - Corporate, 
					--SM&C Government - SMB, 
					--Strategic - Commercial Other, 
					--Strategic - Health, 
					--Strategic - Federal Government, 
					--Strategic - Public Sector, 
					--High Value Individual, 
					--UnSegmented

    				 )

    		)