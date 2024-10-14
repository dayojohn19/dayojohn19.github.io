// Get resort data and put it all on the Index.html 





function UpdateResortData(resortData) {
    // Update Resort Details
    document.querySelector("#resort_headerImage").setAttribute('style',`background-image:url(${resortData.resort_headerImage})`)
    document.querySelector("#resort_RealName").innerHTML = resortData.resort_RealName;
    document.querySelector("#resort_resort_name").innerHTML = resortData.resort_RealName
    document.querySelector("#resort_address").innerHTML = resortData.resort_address;
    document.querySelector("#resort_address2").innerHTML = resortData.resort_address;
    document.querySelector("#resort_description").innerHTML = resortData.resort_description;
    document.querySelector("#resort_contactNumber2").innerHTML = resortData.resort_contactNumber;
    document.querySelector("#resort_contactEmail").innerHTML = resortData.resort_contactEmail;
    document.querySelector("#resort_promotional_video").setAttribute('src', resortData.resort_promotionalVideo);
    document.querySelector("#resort_QRLink").setAttribute('src',resortData.resort_QRLink)
    document.querySelector("#resort_QRLink_download").setAttribute('href',resortData.resort_QRLink)
    // document.querySelector("#gmap_canvas").setAttribute('src',`https://maps.google.com/maps?q=${resortData.resort_latitude},%20${resortData.resort_longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
    document.querySelector(".gmap_canvas").innerHTML = `<iframe src="https://maps.google.com/maps?q=${resortData.resort_latitude},%20${resortData.resort_longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed" width="inherit" height="80vh" id="gmap_canvas"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0"> </iframe><br />`
    // Update Resort Contact Form
    document.querySelector("#reply_to").value = `\n\n\n ${resortData.resort_contactNumber}`
    document.querySelector("#to_name").value = `${resortData.resort_contactEmail}`
    CreateCarousels(resortData)
}


function CreateCarousels(resortData) {
    console.log()
    accomodation_container = document.querySelector("#resort_Accomodations")
    accomodation_data = resortData.resort_Accomodations
    activity_container = document.querySelector("#resort_Activities")
    activity_data = resortData.resort_Activities

    tour_container = document.querySelector("#resort_Tour")
    tour_data = resortData.resort_Tour

    CreateEachPackages(accomodation_data,accomodation_container)
    CreateEachPackages(activity_data,activity_container)
    CreateEachPackages(tour_data,tour_container)

    function CreateEachPackages(resort_data,data_container){
        // data = JSON.parse(data)
        // console.log('PARSED: ',data)
        resort_data.forEach(package => {
            CarouselMainContainerDetails = document.createElement('details');
            CarouselMainContainerDetails.className = 'package-summary'
            CarouselMainContainerDetails.open = true
        
            CarouselSummary = document.createElement('summary') 
            CarouselSummary.className='sub-package-summary'
    
            CarouselTitle = document.createElement('span')
            CarouselTitle.className='sub-package-title';
            CarouselTitle.textContent=package.package_title;
            CarouselSummary.append(CarouselTitle)
            CarouselMainContainerDetails.appendChild(CarouselSummary)
            data_container.append(CarouselMainContainerDetails)

            package.package_subpackage.forEach(subpackage => {


                package_item = document.createElement('div')
                package_item.className = 'room-item red-red-white'
                hrDiv = document.createElement("hr")
                package_item.append(hrDiv)
                package_details = document.createElement('details')
                package_details.open = true
                package_summary = document.createElement('summary')
                package_summary.id = 'package-' + subpackage.package_id
                package_summary.textContent = subpackage.package_name
                package_details.append(package_summary)
                package_description = document.createElement('p')
                package_description.textContent = subpackage.package_description
                package_details.append(package_description)
                package_information = document.createElement('span')
                package_information.className = 'sub-information'
                package_information.textContent = subpackage.package_information
                package_details.append(package_information)
                // package_book_button = document.createElement('button')
                // package_book_button.className='button-book'
                // package_book_button.setAttribute('onclick',alert('Make: ',subpackage.package_name))
                // package_book_button.onc('click',alert())
                // package_book_button.textContent = 'Book'
                // package_details.append(package_book_button)




                package_item.append(package_details)
                CarouselMainContainerDetails.append(package_item)
                

                package_carousel = document.createElement('div')
                package_carousel.id = 'carousel_image-' + package.resortpackage_id + subpackage.package_id
                package_carousel.className = 'carousel slide'
                package_carousel.setAttribute("data-bs-ride", true)

                CarouselMainContainerDetails.append(package_carousel)

                
                
                // Not yet appended
                package_inner_carousel = document.createElement('div')
                package_inner_carousel.className = 'carousel-inner'
                package_carousel.append(package_inner_carousel)
                subpackage.package_image.forEach(function callback(eachImage, index) {
                    carousel_image_container = document.createElement('div')
                    if (index == 0) {
                        carousel_image_container.className = 'carousel-item active'
                    } else {
                        carousel_image_container.className = 'carousel-item'
                    }
                    carousel_image_item = document.createElement('img')
                    carousel_image_item.setAttribute('src', eachImage)
                    // carousel_image_item.setAttribute('onclick',alert('Make: ',subpackage.package_name))
                    // carousel_image_item.onclick = function () { alert('Make: ', subpackage.package_name)}
                    
                    carousel_image_container.append(carousel_image_item)
                    package_inner_carousel.append(carousel_image_container)
                    // CarouselMainContainerDetails.append(package_inner_carousel)
                });
                    button_prev = document.createElement('button')
                    button_prev.setAttribute('data-bs-target','#carousel_image-'+package.resortpackage_id+subpackage.package_id)
                    button_prev.className='carousel-control-prev',
                    button_prev.setAttribute('type','button')
                    button_prev.setAttribute('data-bs-slide',"prev")

                    button_prev_icon = document.createElement('span')
                    button_prev_icon.setAttribute('data-bs-target','#carousel_image-'+package.resortpackage_id+subpackage.package_id)
                    button_prev_icon.className = 'carousel-control-prev-icon'
                    button_prev_icon.setAttribute('aria-hidden',true)
                    button_prev.append(button_prev_icon)
                    button_previous = document.createElement('span')
                    button_previous.className = 'visually-hidden'
                    button_previous.textContent = 'Previous'
                    button_prev.append(button_previous)
                    package_inner_carousel.append(button_prev)
                    // 
                    // 
                    button_ne = document.createElement('button')
                    button_ne.setAttribute('data-bs-target','#carousel_image-'+package.resortpackage_id+subpackage.package_id)
                    button_ne.className='carousel-control-next',
                    button_ne.setAttribute('type','button')
                    button_ne.setAttribute('data-bs-slide',"next")

                    button_ne_icon = document.createElement('span')
                    button_ne_icon.setAttribute('data-bs-target','#carousel_image-'+package.resortpackage_id+subpackage.package_id)
                    button_ne_icon.className = 'carousel-control-next-icon'
                    button_ne_icon.setAttribute('aria-hidden',true)
                    button_ne.append(button_ne_icon)
                    button_next = document.createElement('span')
                    button_next.className = 'visually-hidden'
                    button_next.textContent = 'Previous'
                    button_prev.append(button_next)
                    package_inner_carousel.append(button_ne)

                
                // CarouselMainContainerDetails.append(package_inner_carousel)

            })

        });

    }


}
  


function Update_Resort_Data_From_URL(resort_url){
        let req = new XMLHttpRequest();
    // https://jsonbin.io/app/bins
    // to Use change the last  https://api.jsonbin.io/v3/b/<BIN_ID>
      req.open("GET", `https://api.jsonbin.io/v3/b/670d1993acd3cb34a896c20e`, true);
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("X-Access-Key", "$2a$10$0DnmOTXD4FH6pg/Ww0EcvOgU5TufJYVYizT0G0B1wLaocr99G8iUS");
      req.send();


      
      req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        resort_lists = JSON.parse(req.response).record
        console.log('Resort Lists: ',resort_lists,resort_url)
            // request again to the site
            req.open("GET",`https://api.jsonbin.io/v3/b/${resort_lists[resort_url]}`, true)
            req.setRequestHeader("Content-Type", "application/json");
            req.setRequestHeader("X-Access-Key", "$2a$10$0DnmOTXD4FH6pg/Ww0EcvOgU5TufJYVYizT0G0B1wLaocr99G8iUS");            
            req.send();
            req.onreadystatechange = () => {
                if (req.readyState == XMLHttpRequest.DONE) {
                    resort_allData = req.response.record
                    all_resorts_data = JSON.parse(req.response).record[0]
                    localStorage.setItem(resort_url,JSON.stringify(all_resorts_data) );
                    // What to do with all the data
                    saved_resort_data = JSON.parse(localStorage[resort_url])
                    // console.log('Saved New Resort in the Storage',saved_resort_data)
                    UpdateResortData(saved_resort_data)
                    return 
                }
            }
        }
      };
    



}

