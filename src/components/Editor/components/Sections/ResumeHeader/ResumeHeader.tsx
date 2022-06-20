// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ResumeHeader = (): string => {
    return `
<div data-Editor="true" id="large" class="w-full">
    <div data-editable="true" data-resume-header="true"> 

      <div data-h-left="true">
            <h1  data-content-edit="true" id="header-name" class="uppercase"  placeholder="Your Name"></h1>
            <p   data-content-edit="true" id="header-title"  placeholder="Your next desired role?"></p>
            <div class="header-contact">
              <div  id="h-phone"><i class="material-icons">call</i><div data-content-edit="true" placeholder="Phone"></div></div>
              <div id="h-email"><i class="material-icons">alternate_email</i><div data-content-edit="true" placeholder="Email"></div></div>
              <div id="h-link"><i class="material-icons">attach_file</i><div data-content-edit="true" placeholder="website/link"></div></div>
              <div id="h-location"><i class="material-icons">share_location</i><div data-content-edit="true" placeholder="Location"></div></div>
            </div>            
      </div>
      <div id="h-photo" data-h-right="true"> <div data-h-image="true" class="image-curve"></div></div>
    </div>
    <div id="mainContentEditor">
      <div id="left-aria" data-left-aria="true"></div>
       <div id="right-aria" data-right-aria="true"></div>
       </div>
    </div>
`
}
export default ResumeHeader;