(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{78:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"b",(function(){return o}));const n={font:"#ffffff",red:"#bf0a0a",green:"#3a7970",light:"#3c75af",main:"#244a72",dark:"#111d2a",faintWhite:"#cfcfcf"},a={"#1":"3rem","#2":"2rem","#3":"1.5rem","#4":"1.2rem","#5":"1rem"},o={"#1":"7rem","#2":"5rem","#3":"4rem","#4":"3rem","#5":"2.5rem","#6":"2rem"}},79:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));i(0);var n=i(78),a=i(3);const o={layout:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"40rem",borderRadius:"0.5rem",backgroundColor:"white",boxShadow:"0 0 11px 0px "+n.a.main,zIndex:2,"@media (max-width: 768px)":{width:"90vw",borderRadius:"1.5rem"}},title:{fontSize:n.c["#3"],fontWeight:"bold",backgroundColor:n.a.main,color:n.a.font,padding:"0.5rem 1rem",boxSizing:"border-box",borderRadius:"0.4rem 0.4rem 0 0","@media (max-width: 768px)":{fontSize:n.b["#2"],padding:"1rem",borderRadius:"1.4rem 1.4rem 0 0"}},body:{padding:"2rem","@media (max-width: 768px)":{padding:"3rem"}}};function r({title:e,children:t}){return Object(a.a)("div",{css:o.layout},Object(a.a)("div",{css:o.title},e),Object(a.a)("div",{css:o.body},t))}},80:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));i(0);var n=i(2),a=i(78),o=i(3);function r(){return Object(o.a)("svg",{viewBox:"0 0 448 512"},Object(o.a)("path",{fill:"currentColor",d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}))}const d={button:{position:"fixed",width:"2rem",color:a.a.font,cursor:"pointer",margin:"2rem","&:hover":{color:a.a.faintWhite},"@media (max-width: 768px)":{width:"5rem"}}};function c({onClick:e}){return Object(o.a)("div",{title:"돌아가기",css:d.button,onClick:e},Object(o.a)(r,null))}function b(){const e=Object(n.g)();return Object(o.a)(c,{onClick:()=>{e.push("/")}})}},83:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return B}));var n=i(0),a=i.n(n),o=i(15),r=i(25),d=i(80),c=i(12),b=i(19),u=i(79),s=i(16),m=i(78),l=i(3);const h={text:{fontWeight:"bold",fontSize:m.c["#4"],marginTop:"1rem","@media (max-width: 768px)":{fontSize:m.b["#3"],marginTop:"2rem"}},textarea:{display:"block",width:"100%",height:"7rem",fontSize:m.c["#5"],padding:"0.7rem",boxSizing:"border-box",borderRadius:"0.4rem",backgroundColor:"white",resize:"none","@media (max-width: 768px)":{height:"24rem",fontSize:m.b["#4"]}}};function g({isEditMode:e,quizForm:t,onChange:i}){const n=e?{}:{border:"none"},o=e?"":"disabled";return Object(l.a)(a.a.Fragment,null,Object(l.a)("div",{css:h.text},"문제"),Object(l.a)("textarea",{value:t.question,onChange:i,css:Object(s.a)([h.textarea,n],";label:ArchiveModalQuestion;"),disabled:o}))}const f={text:{fontWeight:"bold",fontSize:m.c["#4"],marginTop:"1rem","@media (max-width: 768px)":{fontSize:m.b["#3"]}},textarea:{display:"block",width:"100%",height:"16rem",fontSize:m.c["#5"],padding:"0.7rem",boxSizing:"border-box",borderRadius:"0.4rem",backgroundColor:"white",resize:"none","@media (max-width: 768px)":{height:"36rem",fontSize:m.b["#4"]}}};function j({isEditMode:e,quizForm:t,onChange:i}){const n=e?{}:{border:"none"},o=e?"":"disabled";return Object(l.a)(a.a.Fragment,null,Object(l.a)("div",{css:f.text},"정답"),Object(l.a)("textarea",{value:t.answer,onChange:i,css:Object(s.a)([f.textarea,n],";label:ArchiveModalAnswer;"),disabled:o}))}const O={readModeTag:{margin:"1rem 0",height:"2rem",fontSize:m.c["#5"],"@media (max-width: 768px)":{height:"8rem",fontSize:m.b["#4"],margin:"2rem 0"}},editModeTag:{margin:"0.8rem 0",width:"100%",height:"2rem",fontSize:m.c["#5"],border:"1px solid #767676",borderRadius:"0.4rem",padding:"0.1rem 0.4rem 0 0.4rem",boxSizing:"border-box","@media (max-width: 768px)":{height:"8rem",fontSize:m.b["#4"],margin:"2rem 0"}}};function p({isEditMode:e,quizForm:t,onChange:i}){return e?Object(l.a)("input",{value:t.tagString,onChange:i,css:O.editModeTag}):Object(l.a)("div",{css:O.readModeTag},t.tagString)}const x={width:"50%",height:"2rem",border:"none",color:m.a.font,fontSize:m.c["#5"],fontWeight:"bold",borderRadius:"0.4rem",cursor:"pointer",backgroundColor:m.a.main,outline:"none","@media (max-width: 768px)":{height:"8rem",fontSize:m.b["#4"],borderRadius:"1.4rem"}};function w({isEditMode:e,handleEditButton:t,handleDeleteButton:i,handleEditCompleteButton:n}){return e?Object(l.a)("button",{type:"button",onClick:n,css:Object(s.a)({...x,width:"100%"},";label:ArchiveModalButton;")},"수정"):Object(l.a)(a.a.Fragment,null,Object(l.a)("button",{type:"button",onClick:t,css:Object(s.a)({...x},";label:ArchiveModalButton;")},"수정"),Object(l.a)("button",{type:"button",onClick:i,css:Object(s.a)({...x,background:"black"},";label:ArchiveModalButton;")},"삭제"))}function z({isEditMode:e}){const t=Object(o.b)(),i=Object(o.c)(e=>e.form.quiz),{_id:n,question:a,answer:d,tagString:s}=i,m=i=>e?e=>{const n={};n[i]=e.target.value,t(Object(r.l)(n))}:()=>{};return Object(l.a)(u.a,{title:"Quiz"},Object(l.a)(g,{isEditMode:e,quizForm:i,onChange:m("question")}),Object(l.a)(j,{isEditMode:e,quizForm:i,onChange:m("answer")}),Object(l.a)(p,{isEditMode:e,quizForm:i,onChange:m("tagString")}),Object(l.a)(w,{isEditMode:e,handleEditButton:async()=>{t(Object(r.k)({type:"editting",showing:!0}))},handleDeleteButton:async()=>{await b.a.deleteQuiz(n)?(await c.d.success("해당 퀴즈를 삭제하였습니다."),t(Object(r.g)(n)),t(Object(r.k)({type:"archive",showing:!1}))):await c.d.fail("삭제하지 못했습니다. 다시 시도해주세요.")},handleEditCompleteButton:async()=>{const e=Object(c.a)(s);await b.a.editQuiz(n,a,d,e)?(await c.d.success("해당 퀴즈를 수정하였습니다."),t(Object(r.b)()),t(Object(r.d)({_id:n,question:a,answer:d,tagString:s}))):await c.d.fail("수정하지 못했습니다. 다시 시도해주세요.")}}))}const v={title:{fontSize:m.c["#3"],fontWeight:"bold",color:m.a.font,margin:"10rem 0 3rem 0",width:"100%","@media (max-width: 768px)":{margin:"20rem 0 3rem 0",fontSize:m.b["#3"]}}};function S(){return Object(l.a)("div",{css:v.title},"아카이브")}const C={layout:{padding:"1rem 3rem",boxShadow:"0 0 3px 1px "+m.a.faintWhite,borderRadius:"1rem",marginTop:"0.5rem",color:m.a.font,cursor:"pointer",fontSize:m.c["#5"],"&:hover":{backgroundColor:m.a.main},"@media (max-width: 768px)":{padding:"2rem 3rem",fontSize:m.b["#4"],marginTop:"1.5rem",borderRadius:"2rem"}}};function k({question:e,onClick:t}){return Object(l.a)("div",{onClick:t,css:C.layout},Object(l.a)("div",null,"Q. ",e))}const y={layout:{display:"flex",flexDirection:"column",margin:"0 auto",padding:"0 0 10rem 0"}};function q({quizzes:e,handleItemClick:t}){return Object(l.a)("div",{css:y.layout},Object(l.a)(S,null),e.map(e=>Object(l.a)("div",{key:e._id},Object(l.a)(k,{question:e.question,onClick:t(e)}))))}const M={width:"60rem",margin:"0 auto","@media (max-width: 768px)":{width:"90vw"}};function E({children:e}){return Object(l.a)("div",{css:M},e)}function R(){const e=Object(o.b)(),t=Object(o.c)(e=>e.quizzes);return Object(l.a)(E,null,Object(l.a)(q,{quizzes:t,handleItemClick:t=>()=>{const{question:i,answer:n,tags:a,_id:o}=t,d=Object(c.b)(a);e(Object(r.l)({_id:o,question:i,answer:n,tagString:d})),e(Object(r.k)({type:"archive",showing:!0}))}}))}function B(){const e=Object(o.b)(),{quizzes:t,modalShowing:i}=Object(o.c)(e=>e);return Object(n.useEffect)(()=>{0===t.length&&e(Object(r.e)())},[]),Object(l.a)(a.a.Fragment,null,Object(l.a)(d.a,null),i.archive&&Object(l.a)(z,{isEditMode:i.editting}),Object(l.a)(R,null))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvTW9kYWxMYXlvdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb25zL1JldHVybmluZ2Nvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWxzL0JhY2tCdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lcnMvQmFja0J1dHRvbkNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWxzL0FyY2hpdmVNb2RhbFF1ZXN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbHMvQXJjaGl2ZU1vZGFsQW5zd2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbHMvQXJjaGl2ZU1vZGFsVGFnLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbHMvQXJjaGl2ZU1vZGFsQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250YWluZXJzL0FyY2hpdmVNb2RhbENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWxzL0FyY2hpdmVUaXRsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWxzL0FyY2hpdmVJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbHMvQXJjaGl2ZUl0ZW1zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL0FyY2hpdmVMYXlvdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lcnMvQXJjaGl2ZUNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0FyY2hpdmVQYWdlLmpzeCJdLCJuYW1lcyI6WyJjb2xvciIsImZvbnQiLCJyZWQiLCJncmVlbiIsImxpZ2h0IiwibWFpbiIsImRhcmsiLCJmYWludFdoaXRlIiwic2l6ZSIsIm1vYmlsZVNpemUiLCJzdHlsZXMiLCJsYXlvdXQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInpJbmRleCIsInRpdGxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwicGFkZGluZyIsImJveFNpemluZyIsImJvZHkiLCJNb2RhbExheW91dCIsImNoaWxkcmVuIiwiY3NzIiwiUmV0dXJuaW5nSWNvbiIsInZpZXdCb3giLCJmaWxsIiwiZCIsImJ1dHRvbiIsImN1cnNvciIsIm1hcmdpbiIsIkJhY2tCdXR0b24iLCJvbkNsaWNrIiwiQmFja0J1dHRvbkNvbnRhaW5lciIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwicHVzaCIsInRleHQiLCJtYXJnaW5Ub3AiLCJ0ZXh0YXJlYSIsImRpc3BsYXkiLCJoZWlnaHQiLCJyZXNpemUiLCJBcmNoaXZlTW9kYWxRdWVzdGlvbiIsImlzRWRpdE1vZGUiLCJxdWl6Rm9ybSIsIm9uQ2hhbmdlIiwiYWRkaXRpb25hbENTUyIsImJvcmRlciIsImRpc2FibGVkUHJvcCIsInZhbHVlIiwicXVlc3Rpb24iLCJkaXNhYmxlZCIsIkFyY2hpdmVNb2RhbEFuc3dlciIsImFuc3dlciIsInJlYWRNb2RlVGFnIiwiZWRpdE1vZGVUYWciLCJBcmNoaXZlTW9kYWxUYWciLCJ0YWdTdHJpbmciLCJvdXRsaW5lIiwiQXJjaGl2ZU1vZGFsQnV0dG9uIiwiaGFuZGxlRWRpdEJ1dHRvbiIsImhhbmRsZURlbGV0ZUJ1dHRvbiIsImhhbmRsZUVkaXRDb21wbGV0ZUJ1dHRvbiIsInR5cGUiLCJiYWNrZ3JvdW5kIiwiQXJjaGl2ZU1vZGFsQ29udGFpbmVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJmb3JtIiwicXVpeiIsIl9pZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwicHJvcE5hbWUiLCJlIiwiZm9ybVN0YXRlIiwidGFyZ2V0Iiwic2V0UXVpekZvcm0iLCJhc3luYyIsInNldE1vZGFsU3RhdGUiLCJzaG93aW5nIiwiYXBpIiwiZGVsZXRlUXVpeiIsInBvcHVwTWVzc2FnZXMiLCJzdWNjZXNzIiwicmVtb3ZlUXVpeiIsImZhaWwiLCJ0YWdzIiwiY29udmVydFRhZ1N0cmluZ1RvVGFncyIsImVkaXRRdWl6IiwiY2xvc2VBbGxNb2RhbCIsIkFyY2hpdmVUaXRsZSIsIkFyY2hpdmVJdGVtIiwiZmxleERpcmVjdGlvbiIsIkFyY2hpdmVJdGVtcyIsInF1aXp6ZXMiLCJoYW5kbGVJdGVtQ2xpY2siLCJtYXAiLCJrZXkiLCJzdHlsZSIsIkFyY2hpdmVMYXlvdXQiLCJBcmNoaXZlQ29udGFpbmVyIiwiY29udmVydFRhZ3NUb1RhZ1N0cmluZyIsIkFyY2hpdmVQYWdlIiwibW9kYWxTaG93aW5nIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwibG9hZFF1aXp6ZXMiLCJhcmNoaXZlIiwiZWRpdHRpbmciXSwibWFwcGluZ3MiOiJ5RkFBQSxzR0FBTyxNQUFNQSxFQUFRLENBQ25CQyxLQUFNLFVBQ05DLElBQUssVUFDTEMsTUFBTyxVQUNQQyxNQUFPLFVBQ1BDLEtBQU0sVUFDTkMsS0FBTSxVQUNOQyxXQUFZLFdBR0RDLEVBQU8sQ0FDbEIsS0FBTSxPQUNOLEtBQU0sT0FDTixLQUFNLFNBQ04sS0FBTSxTQUNOLEtBQU0sUUFHS0MsRUFBYSxDQUN4QixLQUFNLE9BQ04sS0FBTSxPQUNOLEtBQU0sT0FDTixLQUFNLE9BQ04sS0FBTSxTQUNOLEtBQU0sUyxnQ0N4QlIsMERBSUEsTUFBTUMsRUFBUyxDQUNiQyxPQUFRLENBQ05DLFNBQVUsUUFDVkMsSUFBSyxNQUNMQyxLQUFNLE1B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QUFELENBQ0UzQyxTQUFVcUIsRUFBS3JCLFNBQ2ZuQixRQUFTa0UsRUFBZ0IxQixRQ3BCckMsTUFBTTZCLEVBQVEsQ0FDWjNGLE1BQU8sUUFDUG9CLE9BQVEsU0FDUiw0QkFBNkIsQ0FDM0JwQixNQUFPLFNBSUksU0FBUzRGLEdBQWMsU0FBRWhGLElBQ3RDLE9BQ0UsbUJBQUtDLElBQUs4RSxHQUNQL0UsR0NGUSxTQUFTaUYsSUFDdEIsTUFBTXBDLEVBQVdDLGNBQ1g2QixFQUFVNUIsWUFBYUMsR0FBVUEsRUFBTTJCLFNBZTdDLE9BQ0UsWUFBQ0ssRUFBRCxLQUNFLFlBQUNOLEVBQUQsQ0FDRUMsUUFBU0EsRUFDVEMsZ0JBakJtQjFCLEdBQVMsS0FDaEMsTUFBTSxTQUNKckIsRUFESSxPQUNNRyxFQUROLEtBQ2NtQyxFQURkLElBQ29CaEIsR0FDdEJELEVBRUVkLEVBQVk4QyxZQUF1QmYsR0FFekN0QixFQUFTWSxZQUFZLENBQ25CTixNQUFLdEIsV0FBVUcsU0FBUUksZUFFekJTLEVBQVNjLFlBQWMsQ0FBRWpCLEtBQU0sVUFBV2tCLFNBQVMsU0NmeEMsU0FBU3VCLElBQ3RCLE1BQU10QyxFQUFXQyxlQUNYLFFBQUU2QixFQUFGLGFBQVdTLEdBQWlCckMsWUFBYUMsR0FBVUEsR0FRekQsT0FOQXFDLG9CQUFVLEtBQ2UsSUFBbkJWLEVBQVFXLFFBQ1Z6QyxFQUFTMEMsZ0JBRVYsSUFHRCw4QkFDRSxZQUFDNUUsRUFBQSxFQUFELE1BQ0N5RSxFQUFhSSxTQUFXLFlBQUM1QyxFQUFELENBQXVCdEIsV0FBWThELEVBQWFLLFdBQ3pFLFlBQUNSLEVBQUQiLCJmaWxlIjoibWFpbi5kOGJlZTg1N2VkNTMxN2NkODljOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgZm9udDogJyNmZmZmZmYnLFxuICByZWQ6ICcjYmYwYTBhJyxcbiAgZ3JlZW46ICcjM2E3OTcwJyxcbiAgbGlnaHQ6ICcjM2M3NWFmJyxcbiAgbWFpbjogJyMyNDRhNzInLFxuICBkYXJrOiAnIzExMWQyYScsXG4gIGZhaW50V2hpdGU6ICcjY2ZjZmNmJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzaXplID0ge1xuICAnIzEnOiAnM3JlbScsXG4gICcjMic6ICcycmVtJyxcbiAgJyMzJzogJzEuNXJlbScsXG4gICcjNCc6ICcxLjJyZW0nLFxuICAnIzUnOiAnMXJlbScsXG59O1xuXG5leHBvcnQgY29uc3QgbW9iaWxlU2l6ZSA9IHtcbiAgJyMxJzogJzdyZW0nLFxuICAnIzInOiAnNXJlbScsXG4gICcjMyc6ICc0cmVtJyxcbiAgJyM0JzogJzNyZW0nLFxuICAnIzUnOiAnMi41cmVtJyxcbiAgJyM2JzogJzJyZW0nLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbG9yLCBtb2JpbGVTaXplLCBzaXplIH0gZnJvbSAnLi4vLi4vc3RhdGljJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBsYXlvdXQ6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgd2lkdGg6ICc0MHJlbScsXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYm94U2hhZG93OiBgMCAwIDExcHggMHB4ICR7Y29sb3IubWFpbn1gLFxuICAgIHpJbmRleDogMixcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIHdpZHRoOiAnOTB2dycsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxLjVyZW0nLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IHNpemVbJyMzJ10sXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IubWFpbixcbiAgICBjb2xvcjogY29sb3IuZm9udCxcbiAgICBwYWRkaW5nOiAnMC41cmVtIDFyZW0nLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNHJlbSAwLjRyZW0gMCAwJyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiBtb2JpbGVTaXplWycjMiddLFxuICAgICAgcGFkZGluZzogJzFyZW0nLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMS40cmVtIDEuNHJlbSAwIDAnLFxuICAgIH0sXG4gIH0sXG4gIGJvZHk6IHtcbiAgICBwYWRkaW5nOiAnMnJlbScsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICBwYWRkaW5nOiAnM3JlbScsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsTGF5b3V0KHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17c3R5bGVzLmxheW91dH0+XG4gICAgICA8ZGl2IGNzcz17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNzcz17c3R5bGVzLmJvZHl9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJldHVybmluZ0ljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBkPVwiTTI1Ny41IDQ0NS4xbC0yMi4yIDIyLjJjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwTDcgMjczYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUwyMDEuNCA0NC43YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjIgMjIuMmM5LjUgOS41IDkuMyAyNS0uNCAzNC4zTDEzNi42IDIxNkg0MjRjMTMuMyAwIDI0IDEwLjcgMjQgMjR2MzJjMCAxMy4zLTEwLjcgMjQtMjQgMjRIMTM2LjZsMTIwLjUgMTE0LjhjOS44IDkuMyAxMCAyNC44LjQgMzQuM3pcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vLi4vc3RhdGljJztcblxuaW1wb3J0IFJldHVybmluZ0ljb24gZnJvbSAnLi4vaWNvbnMvUmV0dXJuaW5nY29uJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBidXR0b246IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB3aWR0aDogJzJyZW0nLFxuICAgIGNvbG9yOiBjb2xvci5mb250LFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG1hcmdpbjogJzJyZW0nLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGNvbG9yLmZhaW50V2hpdGUsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIHdpZHRoOiAnNXJlbScsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhY2tCdXR0b24oeyBvbkNsaWNrIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB0aXRsZT1cIuuPjOyVhOqwgOq4sFwiXG4gICAgICBjc3M9e3N0eWxlcy5idXR0b259XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxSZXR1cm5pbmdJY29uIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gJy4uL3ByZXNlbnRhdGlvbmFscy9CYWNrQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFja0J1dHRvbkNvbnRhaW5lcigpIHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBoYW5kbGVCYWNrQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKCcvJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QmFja0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVCYWNrQnV0dG9uQ2xpY2t9IC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBtb2JpbGVTaXplLCBzaXplIH0gZnJvbSAnLi4vLi4vc3RhdGljJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICB0ZXh0OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiBzaXplWycjNCddLFxuICAgIG1hcmdpblRvcDogJzFyZW0nLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgZm9udFNpemU6IG1vYmlsZVNpemVbJyMzJ10sXG4gICAgICBtYXJnaW5Ub3A6ICcycmVtJyxcbiAgICB9LFxuICB9LFxuICB0ZXh0YXJlYToge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICc3cmVtJyxcbiAgICBmb250U2l6ZTogc2l6ZVsnIzUnXSxcbiAgICBwYWRkaW5nOiAnMC43cmVtJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBib3JkZXJSYWRpdXM6ICcwLjRyZW0nLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICByZXNpemU6ICdub25lJyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIGhlaWdodDogJzI0cmVtJyxcbiAgICAgIGZvbnRTaXplOiBtb2JpbGVTaXplWycjNCddLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmNoaXZlTW9kYWxRdWVzdGlvbih7IGlzRWRpdE1vZGUsIHF1aXpGb3JtLCBvbkNoYW5nZSB9KSB7XG4gIGNvbnN0IGFkZGl0aW9uYWxDU1MgPSBpc0VkaXRNb2RlID8ge30gOiB7IGJvcmRlcjogJ25vbmUnIH07XG4gIGNvbnN0IGRpc2FibGVkUHJvcCA9IGlzRWRpdE1vZGUgPyAnJyA6ICdkaXNhYmxlZCc7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjc3M9e3N0eWxlcy50ZXh0fT7rrLjsoJw8L2Rpdj5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICB2YWx1ZT17cXVpekZvcm0ucXVlc3Rpb259XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgY3NzPXtbc3R5bGVzLnRleHRhcmVhLCBhZGRpdGlvbmFsQ1NTXX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkUHJvcH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBtb2JpbGVTaXplLCBzaXplIH0gZnJvbSAnLi4vLi4vc3RhdGljJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICB0ZXh0OiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiBzaXplWycjNCddLFxuICAgIG1hcmdpblRvcDogJzFyZW0nLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgZm9udFNpemU6IG1vYmlsZVNpemVbJyMzJ10sXG4gICAgfSxcbiAgfSxcbiAgdGV4dGFyZWE6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTZyZW0nLFxuICAgIGZvbnRTaXplOiBzaXplWycjNSddLFxuICAgIHBhZGRpbmc6ICcwLjdyZW0nLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNHJlbScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIHJlc2l6ZTogJ25vbmUnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgaGVpZ2h0OiAnMzZyZW0nLFxuICAgICAgZm9udFNpemU6IG1vYmlsZVNpemVbJyM0J10sXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyY2hpdmVNb2RhbEFuc3dlcih7IGlzRWRpdE1vZGUsIHF1aXpGb3JtLCBvbkNoYW5nZSB9KSB7XG4gIGNvbnN0IGFkZGl0aW9uYWxDU1MgPSBpc0VkaXRNb2RlID8ge30gOiB7IGJvcmRlcjogJ25vbmUnIH07XG4gIGNvbnN0IGRpc2FibGVkUHJvcCA9IGlzRWRpdE1vZGUgPyAnJyA6ICdkaXNhYmxlZCc7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjc3M9e3N0eWxlcy50ZXh0fT7soJXri7U8L2Rpdj5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICB2YWx1ZT17cXVpekZvcm0uYW5zd2VyfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIGNzcz17W3N0eWxlcy50ZXh0YXJlYSwgYWRkaXRpb25hbENTU119XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZFByb3B9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vYmlsZVNpemUsIHNpemUgfSBmcm9tICcuLi8uLi9zdGF0aWMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHJlYWRNb2RlVGFnOiB7XG4gICAgbWFyZ2luOiAnMXJlbSAwJyxcbiAgICBoZWlnaHQ6ICcycmVtJyxcbiAgICBmb250U2l6ZTogc2l6ZVsnIzUnXSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIGhlaWdodDogJzhyZW0nLFxuICAgICAgZm9udFNpemU6IG1vYmlsZVNpemVbJyM0J10sXG4gICAgICBtYXJnaW46ICcycmVtIDAnLFxuICAgIH0sXG4gIH0sXG4gIGVkaXRNb2RlVGFnOiB7XG4gICAgbWFyZ2luOiAnMC44cmVtIDAnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMnJlbScsXG4gICAgZm9udFNpemU6IHNpemVbJyM1J10sXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICM3Njc2NzYnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNHJlbScsXG4gICAgcGFkZGluZzogJzAuMXJlbSAwLjRyZW0gMCAwLjRyZW0nLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgaGVpZ2h0OiAnOHJlbScsXG4gICAgICBmb250U2l6ZTogbW9iaWxlU2l6ZVsnIzQnXSxcbiAgICAgIG1hcmdpbjogJzJyZW0gMCcsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyY2hpdmVNb2RhbFRhZyh7IGlzRWRpdE1vZGUsIHF1aXpGb3JtLCBvbkNoYW5nZSB9KSB7XG4gIGlmIChpc0VkaXRNb2RlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICB2YWx1ZT17cXVpekZvcm0udGFnU3RyaW5nfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIGNzcz17c3R5bGVzLmVkaXRNb2RlVGFnfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17c3R5bGVzLnJlYWRNb2RlVGFnfT57cXVpekZvcm0udGFnU3RyaW5nfTwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY29sb3IsIG1vYmlsZVNpemUsIHNpemUgfSBmcm9tICcuLi8uLi9zdGF0aWMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJ1dHRvbjoge1xuICAgIHdpZHRoOiAnNTAlJyxcbiAgICBoZWlnaHQ6ICcycmVtJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBjb2xvcjogY29sb3IuZm9udCxcbiAgICBmb250U2l6ZTogc2l6ZVsnIzUnXSxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMC40cmVtJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLm1haW4sXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgaGVpZ2h0OiAnOHJlbScsXG4gICAgICBmb250U2l6ZTogbW9iaWxlU2l6ZVsnIzQnXSxcbiAgICAgIGJvcmRlclJhZGl1czogJzEuNHJlbScsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyY2hpdmVNb2RhbEJ1dHRvbih7XG4gIGlzRWRpdE1vZGUsIGhhbmRsZUVkaXRCdXR0b24sIGhhbmRsZURlbGV0ZUJ1dHRvbiwgaGFuZGxlRWRpdENvbXBsZXRlQnV0dG9uLFxufSkge1xuICBpZiAoaXNFZGl0TW9kZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVFZGl0Q29tcGxldGVCdXR0b259XG4gICAgICAgIGNzcz17eyAuLi5zdHlsZXMuYnV0dG9uLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICA+XG4gICAgICAgIOyImOyglVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUVkaXRCdXR0b259XG4gICAgICAgIGNzcz17eyAuLi5zdHlsZXMuYnV0dG9uIH19XG4gICAgICA+XG4gICAgICAgIOyImOyglVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGVCdXR0b259XG4gICAgICAgIGNzcz17eyAuLi5zdHlsZXMuYnV0dG9uLCBiYWNrZ3JvdW5kOiAnYmxhY2snIH19XG4gICAgICA+XG4gICAgICAgIOyCreygnFxuICAgICAgPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7XG4gIHNldE1vZGFsU3RhdGUsXG4gIHJlbW92ZVF1aXosXG4gIGVkaXRRdWl6LFxuICBjbG9zZUFsbE1vZGFsLFxuICBzZXRRdWl6Rm9ybSxcbn0gZnJvbSAnLi4vLi4vc2xpY2UnO1xuXG5pbXBvcnQgeyBwb3B1cE1lc3NhZ2VzLCBjb252ZXJ0VGFnU3RyaW5nVG9UYWdzIH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5cbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vYXBpcy9hcGknO1xuXG5pbXBvcnQgTW9kYWxMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9Nb2RhbExheW91dCc7XG5pbXBvcnQgQXJjaGl2ZU1vZGFsUXVlc3Rpb24gZnJvbSAnLi4vcHJlc2VudGF0aW9uYWxzL0FyY2hpdmVNb2RhbFF1ZXN0aW9uJztcbmltcG9ydCBBcmNoaXZlTW9kYWxBbnN3ZXIgZnJvbSAnLi4vcHJlc2VudGF0aW9uYWxzL0FyY2hpdmVNb2RhbEFuc3dlcic7XG5pbXBvcnQgQXJjaGl2ZU1vZGFsVGFnIGZyb20gJy4uL3ByZXNlbnRhdGlvbmFscy9BcmNoaXZlTW9kYWxUYWcnO1xuaW1wb3J0IEFyY2hpdmVNb2RhbEJ1dHRvbiBmcm9tICcuLi9wcmVzZW50YXRpb25hbHMvQXJjaGl2ZU1vZGFsQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJjaGl2ZU1vZGFsQ29udGFpbmVyKHsgaXNFZGl0TW9kZSB9KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBxdWl6Rm9ybSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZm9ybS5xdWl6KTtcblxuICBjb25zdCB7XG4gICAgX2lkLCBxdWVzdGlvbiwgYW5zd2VyLCB0YWdTdHJpbmcsXG4gIH0gPSBxdWl6Rm9ybTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChwcm9wTmFtZSkgPT4ge1xuICAgIGlmICghaXNFZGl0TW9kZSkge1xuICAgICAgcmV0dXJuICgpID0+IHt9O1xuICAgIH1cblxuICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgY29uc3QgZm9ybVN0YXRlID0ge307XG4gICAgICBmb3JtU3RhdGVbcHJvcE5hbWVdID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICAgIGRpc3BhdGNoKHNldFF1aXpGb3JtKGZvcm1TdGF0ZSkpO1xuICAgIH07XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRWRpdEJ1dHRvbiA9IGFzeW5jICgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRNb2RhbFN0YXRlKHsgdHlwZTogJ2VkaXR0aW5nJywgc2hvd2luZzogdHJ1ZSB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQnV0dG9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCBhcGkuZGVsZXRlUXVpeihfaWQpO1xuXG4gICAgaWYgKCFzdWNjZXNzKSB7XG4gICAgICBhd2FpdCBwb3B1cE1lc3NhZ2VzLmZhaWwoJ+yCreygnO2VmOyngCDrqrvtlojsirXri4jri6QuIOuLpOyLnCDsi5zrj4TtlbTso7zshLjsmpQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXdhaXQgcG9wdXBNZXNzYWdlcy5zdWNjZXNzKCftlbTri7kg7YC07KaI66W8IOyCreygnO2VmOyYgOyKteuLiOuLpC4nKTtcbiAgICBkaXNwYXRjaChyZW1vdmVRdWl6KF9pZCkpO1xuICAgIGRpc3BhdGNoKHNldE1vZGFsU3RhdGUoeyB0eXBlOiAnYXJjaGl2ZScsIHNob3dpbmc6IGZhbHNlIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFZGl0Q29tcGxldGVCdXR0b24gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdGFncyA9IGNvbnZlcnRUYWdTdHJpbmdUb1RhZ3ModGFnU3RyaW5nKTtcbiAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgYXBpLmVkaXRRdWl6KF9pZCwgcXVlc3Rpb24sIGFuc3dlciwgdGFncyk7XG5cbiAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgIGF3YWl0IHBvcHVwTWVzc2FnZXMuZmFpbCgn7IiY7KCV7ZWY7KeAIOuqu+2WiOyKteuLiOuLpC4g64uk7IucIOyLnOuPhO2VtOyjvOyEuOyalC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCBwb3B1cE1lc3NhZ2VzLnN1Y2Nlc3MoJ+2VtOuLuSDtgLTspojrpbwg7IiY7KCV7ZWY7JiA7Iq164uI64ukLicpO1xuICAgIGRpc3BhdGNoKGNsb3NlQWxsTW9kYWwoKSk7XG4gICAgZGlzcGF0Y2goZWRpdFF1aXooe1xuICAgICAgX2lkLCBxdWVzdGlvbiwgYW5zd2VyLCB0YWdTdHJpbmcsXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsTGF5b3V0IHRpdGxlPVwiUXVpelwiPlxuICAgICAgPEFyY2hpdmVNb2RhbFF1ZXN0aW9uXG4gICAgICAgIGlzRWRpdE1vZGU9e2lzRWRpdE1vZGV9XG4gICAgICAgIHF1aXpGb3JtPXtxdWl6Rm9ybX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlKCdxdWVzdGlvbicpfVxuICAgICAgLz5cbiAgICAgIDxBcmNoaXZlTW9kYWxBbnN3ZXJcbiAgICAgICAgaXNFZGl0TW9kZT17aXNFZGl0TW9kZX1cbiAgICAgICAgcXVpekZvcm09e3F1aXpGb3JtfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2UoJ2Fuc3dlcicpfVxuICAgICAgLz5cbiAgICAgIDxBcmNoaXZlTW9kYWxUYWdcbiAgICAgICAgaXNFZGl0TW9kZT17aXNFZGl0TW9kZX1cbiAgICAgICAgcXVpekZvcm09e3F1aXpGb3JtfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2UoJ3RhZ1N0cmluZycpfVxuICAgICAgLz5cbiAgICAgIDxBcmNoaXZlTW9kYWxCdXR0b25cbiAgICAgICAgaXNFZGl0TW9kZT17aXNFZGl0TW9kZX1cbiAgICAgICAgaGFuZGxlRWRpdEJ1dHRvbj17aGFuZGxlRWRpdEJ1dHRvbn1cbiAgICAgICAgaGFuZGxlRGVsZXRlQnV0dG9uPXtoYW5kbGVEZWxldGVCdXR0b259XG4gICAgICAgIGhhbmRsZUVkaXRDb21wbGV0ZUJ1dHRvbj17aGFuZGxlRWRpdENvbXBsZXRlQnV0dG9ufVxuICAgICAgLz5cbiAgICA8L01vZGFsTGF5b3V0PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY29sb3IsIG1vYmlsZVNpemUsIHNpemUgfSBmcm9tICcuLi8uLi9zdGF0aWMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IHNpemVbJyMzJ10sXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGNvbG9yOiBjb2xvci5mb250LFxuICAgIG1hcmdpbjogJzEwcmVtIDAgM3JlbSAwJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgbWFyZ2luOiAnMjByZW0gMCAzcmVtIDAnLFxuICAgICAgZm9udFNpemU6IG1vYmlsZVNpemVbJyMzJ10sXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyY2hpdmVUaXRsZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17c3R5bGVzLnRpdGxlfT7slYTsubTsnbTruIw8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbG9yLCBtb2JpbGVTaXplLCBzaXplIH0gZnJvbSAnLi4vLi4vc3RhdGljJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBsYXlvdXQ6IHtcbiAgICBwYWRkaW5nOiAnMXJlbSAzcmVtJyxcbiAgICBib3hTaGFkb3c6IGAwIDAgM3B4IDFweCAke2NvbG9yLmZhaW50V2hpdGV9YCxcbiAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcbiAgICBtYXJnaW5Ub3A6ICcwLjVyZW0nLFxuICAgIGNvbG9yOiBjb2xvci5mb250LFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGZvbnRTaXplOiBzaXplWycjNSddLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvci5tYWluLFxuICAgIH0sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICBwYWRkaW5nOiAnMnJlbSAzcmVtJyxcbiAgICAgIGZvbnRTaXplOiBtb2JpbGVTaXplWycjNCddLFxuICAgICAgbWFyZ2luVG9wOiAnMS41cmVtJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzJyZW0nLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmNoaXZlSXRlbSh7IHF1ZXN0aW9uLCBvbkNsaWNrIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2t9IGNzcz17c3R5bGVzLmxheW91dH0+XG4gICAgICA8ZGl2PlEuIHtxdWVzdGlvbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBBcmNoaXZlVGl0bGUgZnJvbSAnLi9BcmNoaXZlVGl0bGUnO1xuaW1wb3J0IEFyY2hpdmVJdGVtIGZyb20gJy4vQXJjaGl2ZUl0ZW0nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGxheW91dDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIHBhZGRpbmc6ICcwIDAgMTByZW0gMCcsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmNoaXZlSXRlbXMoeyBxdWl6emVzLCBoYW5kbGVJdGVtQ2xpY2sgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtzdHlsZXMubGF5b3V0fT5cbiAgICAgIDxBcmNoaXZlVGl0bGUgLz5cbiAgICAgIHtxdWl6emVzLm1hcCgocXVpeikgPT4gKFxuICAgICAgICA8ZGl2IGtleT17cXVpei5faWR9PlxuICAgICAgICAgIDxBcmNoaXZlSXRlbVxuICAgICAgICAgICAgcXVlc3Rpb249e3F1aXoucXVlc3Rpb259XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVJdGVtQ2xpY2socXVpeil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHN0eWxlID0ge1xuICB3aWR0aDogJzYwcmVtJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgd2lkdGg6ICc5MHZ3JyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyY2hpdmVMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgc2V0TW9kYWxTdGF0ZSwgc2V0UXVpekZvcm0gfSBmcm9tICcuLi8uLi9zbGljZSc7XG5cbmltcG9ydCB7IGNvbnZlcnRUYWdzVG9UYWdTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlsJztcblxuaW1wb3J0IEFyY2hpdmVJdGVtcyBmcm9tICcuLi9wcmVzZW50YXRpb25hbHMvQXJjaGl2ZUl0ZW1zJztcbmltcG9ydCBBcmNoaXZlTGF5b3V0IGZyb20gJy4uL2xheW91dHMvQXJjaGl2ZUxheW91dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyY2hpdmVDb250YWluZXIoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcXVpenplcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucXVpenplcyk7XG5cbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gKHF1aXopID0+ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBxdWVzdGlvbiwgYW5zd2VyLCB0YWdzLCBfaWQsXG4gICAgfSA9IHF1aXo7XG5cbiAgICBjb25zdCB0YWdTdHJpbmcgPSBjb252ZXJ0VGFnc1RvVGFnU3RyaW5nKHRhZ3MpO1xuXG4gICAgZGlzcGF0Y2goc2V0UXVpekZvcm0oe1xuICAgICAgX2lkLCBxdWVzdGlvbiwgYW5zd2VyLCB0YWdTdHJpbmcsXG4gICAgfSkpO1xuICAgIGRpc3BhdGNoKHNldE1vZGFsU3RhdGUoeyB0eXBlOiAnYXJjaGl2ZScsIHNob3dpbmc6IHRydWUgfSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFyY2hpdmVMYXlvdXQ+XG4gICAgICA8QXJjaGl2ZUl0ZW1zXG4gICAgICAgIHF1aXp6ZXM9e3F1aXp6ZXN9XG4gICAgICAgIGhhbmRsZUl0ZW1DbGljaz17aGFuZGxlSXRlbUNsaWNrfVxuICAgICAgLz5cbiAgICA8L0FyY2hpdmVMYXlvdXQ+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGxvYWRRdWl6emVzIH0gZnJvbSAnLi4vc2xpY2UnO1xuXG5pbXBvcnQgQmFja0J1dHRvbkNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcnMvQmFja0J1dHRvbkNvbnRhaW5lcic7XG5pbXBvcnQgQXJjaGl2ZU1vZGFsQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVycy9BcmNoaXZlTW9kYWxDb250YWluZXInO1xuaW1wb3J0IEFyY2hpdmVDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXJzL0FyY2hpdmVDb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmNoaXZlUGFnZSgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHF1aXp6ZXMsIG1vZGFsU2hvd2luZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocXVpenplcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRpc3BhdGNoKGxvYWRRdWl6emVzKCkpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCYWNrQnV0dG9uQ29udGFpbmVyIC8+XG4gICAgICB7bW9kYWxTaG93aW5nLmFyY2hpdmUgJiYgPEFyY2hpdmVNb2RhbENvbnRhaW5lciBpc0VkaXRNb2RlPXttb2RhbFNob3dpbmcuZWRpdHRpbmd9IC8+fVxuICAgICAgPEFyY2hpdmVDb250YWluZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=