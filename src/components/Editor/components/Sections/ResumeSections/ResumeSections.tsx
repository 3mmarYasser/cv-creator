import {Sections} from "../../../../../interfaces";
import SummaryImage from "../../../../../assets/images/Editor/Summary.png";
import ExperienceImage from "../../../../../assets/images/Editor/experience.png";
import VolunteeringImage from "../../../../../assets/images/Editor/volunteering.png";
import LanguagesImage from "../../../../../assets/images/Editor/languages.png";

const ResumeSections = (): Sections[] => {
    return [{
        title: "Summary",
        image: SummaryImage,
        HTML: `
<div data-editable="true" class="resume_Edit_selected" editing="true">

        <div data-content-edit="true" id="custom-edit-title" class="uppercase editing_Text" placeholder="Summary" contenteditable="true"></div>

        <div data-editable="true" data-inner-edit="true" class="">

          <div class="small-text editing_Text" data-content-edit="true" placeholder="What's the one thing you want someone to remember after reading your resume?" contenteditable="true"></div>

        </div>
      </div>

`
    }, {
        title: "Experience",
        image: ExperienceImage,
        HTML: `
<div data-editable="true" >

        <div data-content-edit="true" id="custom-edit-title" class="uppercase editing_Text" placeholder="Experience" contenteditable="true"></div>

        <div data-editable="true" data-inner-edit="true" class="">

          <div data-content-edit="true" placeholder="Title" class="editing_Text" contenteditable="true"></div>
          <div class="small-text resume-color-primary editing_Text" data-content-edit="true" placeholder="Company Name" contenteditable="true"></div>


          <div class="flex items-center text-2xs my-2 opacity-85">
          <div class="flex items-center">
              <i class="material-symbols-outlined opacity-75">calendar_month</i>
             <div class="mx-2 editing_Text" data-content-edit="true" placeholder="Date Period" contenteditable="true"></div>
          </div>

          <div class="flex items-center ">
            <i class="material-symbols-outlined opacity-75">share_location</i>
              <div class="mx-2 editing_Text" data-content-edit="true" placeholder="Location" contenteditable="true"></div>
          </div>
          </div>


          <div class="small-text editing_Text" data-content-edit="true" placeholder="Company Description" contenteditable="true"></div>

        </div>
         </div>

`
    }
        , {
            title: "Volunteering",
            image: VolunteeringImage,
            HTML: `
<div data-editable="true" class="resume_Edit_selected" editing="true">

        <div data-content-edit="true" id="custom-edit-title" class="uppercase editing_Text" placeholder="Volunteering" contenteditable="true"></div>

        <div data-editable="true" data-inner-edit="true" class="">

          <div data-content-edit="true" placeholder="Title" class="editing_Text" contenteditable="true"></div>
          <div class="small-text resume-color-primary editing_Text" data-content-edit="true" placeholder="Organization Name" contenteditable="true"></div>


          <div class="flex items-center text-2xs my-2 opacity-85">
              <i class="material-symbols-outlined opacity-75">calendar_month</i>
             <div class="mx-2 editing_Text" data-content-edit="true" placeholder="Date Period" contenteditable="true"></div>
          </div>


          <div class="small-text editing_Text" data-content-edit="true" placeholder="Description" contenteditable="true"></div>

        </div>
      </div>
`
        }
        , {
            title: "Languages",
            image: LanguagesImage,
            HTML: `
<div data-editable="true">
 <div data-content-edit="true" id="custom-edit-title" class="uppercase editing_Text" placeholder="Languages" contenteditable="true"></div>
 <div data-editable="true" data-inner-edit="true" class="">
  <div class="flex justify-between">
    <div class="small-text editing_Text" data-content-edit="true" placeholder="Languages" contenteditable="true"></div>
    <form class="rating">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5" checked="">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5">
    </form>
    </div>          
  </div>
<div data-editable="true" data-inner-edit="true" class="">
  <div class="flex justify-between">
    <div class="small-text editing_Text" data-content-edit="true" placeholder="Languages" contenteditable="true"></div>
    <form class="rating">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5" checked="">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5">
    </form>
    </div>          
  </div><div data-editable="true" data-inner-edit="true" class="">
  <div class="flex justify-between">
    <div class="small-text editing_Text" data-content-edit="true" placeholder="Languages" contenteditable="true"></div>
    <form class="rating">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5" checked="">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5">
      <input type="radio" name="rating-1" class="mask mask-star ml-1.5">
    </form>
    </div>          
  </div></div>
`
        }]
};

export default ResumeSections;
