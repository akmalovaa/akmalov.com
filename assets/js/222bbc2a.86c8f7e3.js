"use strict";(self.webpackChunkakmalov_com=self.webpackChunkakmalov_com||[]).push([[4745],{9549:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var n=s(4848),r=s(8453);const i={slug:"gitlab-auto-reviewers",title:"Gitlab auto add reviewers",description:"Gitlab auto assign reviewer for merge request",image:"./gitlab-reviewers.png",tags:["gitlab","devops","bash","python"],date:new Date("2023-05-30T00:00:00.000Z")},l=void 0,a={permalink:"/blog/gitlab-auto-reviewers",editUrl:"https://github.com/akmalovaa/akmalov.com/tree/main/blog/gitlab-auto-reviewers/index.md",source:"@site/blog/gitlab-auto-reviewers/index.md",title:"Gitlab auto add reviewers",description:"Gitlab auto assign reviewer for merge request",date:"2023-05-30T00:00:00.000Z",tags:[{label:"gitlab",permalink:"/blog/tags/gitlab"},{label:"devops",permalink:"/blog/tags/devops"},{label:"bash",permalink:"/blog/tags/bash"},{label:"python",permalink:"/blog/tags/python"}],readingTime:2.545,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"gitlab-auto-reviewers",title:"Gitlab auto add reviewers",description:"Gitlab auto assign reviewer for merge request",image:"./gitlab-reviewers.png",tags:["gitlab","devops","bash","python"],date:"2023-05-30T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Docusaurus \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",permalink:"/blog/docusaurus-comments"},nextItem:{title:"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u043e\u0433\u043e \u043a\u043b\u0443\u0431\u0430",permalink:"/blog/monitoring-pc-club"}},d={image:s(5929).A,authorsImageUrls:[]},o=[{value:"Gitlab auto add reviewers",id:"gitlab-auto-add-reviewers",level:2},{value:"1. Reviewer templates",id:"1-reviewer-templates",level:2},{value:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430",id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430",level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:3},{value:"2. Bash gitlab API",id:"2-bash-gitlab-api",level:2},{value:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430",id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-1",level:3},{value:"\u0421\u043a\u0440\u0438\u043f\u0442",id:"\u0441\u043a\u0440\u0438\u043f\u0442",level:3},{value:"3. Python gitlab API",id:"3-python-gitlab-api",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Gitlab auto assign reviewer \u2014 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 assignee \u0438 reviewers \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 mergre request"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/blog/gitlab-auto-reviewers",children:(0,n.jsx)(t.img,{alt:"nginx logo",src:s(7178).A+"",width:"1500",height:"500"})})}),"\n",(0,n.jsx)(t.h2,{id:"gitlab-auto-add-reviewers",children:"Gitlab auto add reviewers"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"\u0426\u0435\u043b\u044c"}),": \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 Merge Request \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u0435\u0432\u044c\u044e\u0432\u0435\u0440\u043e\u0432"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"mr reviewers",src:s(97).A+"",title:"mr reviewers",width:"1292",height:"750"})}),"\n",(0,n.jsx)(t.h2,{id:"1-reviewer-templates",children:"1. Reviewer templates"}),"\n",(0,n.jsx)(t.p,{children:"\u041f\u0435\u0440\u0432\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0440\u0435\u0432\u044c\u044e\u0432\u0435\u0440\u043e\u0432 - \u044d\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 templates. \u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f \u0444\u0438\u0447\u0430 Gitlab, \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0432\u0435\u0440\u0441\u0438\u0439."}),"\n",(0,n.jsxs)(t.p,{children:["\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f - ",(0,n.jsx)(t.a,{href:"https://docs.gitlab.com/ee/user/project/description_templates.html",children:"Description templates"})]}),"\n",(0,n.jsx)(t.h3,{id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430",children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430"}),"\n",(0,n.jsxs)(t.p,{children:["\u041d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e ",(0,n.jsx)(t.code,{children:".gitlab/merge_request_templates"})]}),"\n",(0,n.jsxs)(t.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0432\u043d\u0443\u0442\u0440\u0438 \u043b\u044e\u0431\u043e\u0439 \u0444\u0430\u0439\u043b \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f ",(0,n.jsx)(t.code,{children:".md"})]}),"\n",(0,n.jsxs)(t.p,{children:["\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,n.jsx)(t.code,{children:"top_reviewers.md"})]}),"\n",(0,n.jsx)(t.p,{children:"\u0421 \u0442\u0430\u043a\u0438\u043c \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435\u043c, \u0433\u0434\u0435 \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c username \u0440\u0435\u0432\u044c\u044e\u0432\u0435\u0440\u043e\u0432:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"/assign_reviewer @user1 @user2\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"gitlab template",src:s(5178).A+"",title:"gitlab template",width:"1283",height:"328"})}),"\n",(0,n.jsx)(t.h3,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,n.jsx)(t.p,{children:"\u041f\u043e\u0441\u043b\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u0430\u043a\u043e\u0433\u043e template, \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 MR \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435, \u0433\u0434\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u044b"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"gitlab template",src:s(5606).A+"",title:"gitlab template",width:"1413",height:"756"})}),"\n",(0,n.jsx)(t.p,{children:"\u0423\u0434\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0435\u0441\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u043d\u044b\u0445 \u0433\u0440\u0443\u043f\u043f \u0440\u0435\u0432\u0431\u044e\u0432\u0435\u0440\u043e\u0432, \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0447\u0430\u0441\u0442\u044b\u0445 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0445."}),"\n",(0,n.jsx)(t.h2,{id:"2-bash-gitlab-api",children:"2. Bash gitlab API"}),"\n",(0,n.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 - \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0432 ",(0,n.jsx)(t.code,{children:".gitlab-ci.yml"})," CI/CD, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 API \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0440\u0435\u0432\u044c\u044e\u0432\u0435\u0440\u043e\u0432"]}),"\n",(0,n.jsx)(t.h3,{id:"\u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430-1",children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430"}),"\n",(0,n.jsx)(t.p,{children:"\u0414\u043b\u044f \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f merge request \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f(\u0442\u0440\u0438\u0433\u0433\u0435\u0440\u044b):"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Gitlab CI workflow event"}),"\n",(0,n.jsx)(t.li,{children:"Schedules"}),"\n",(0,n.jsx)(t.li,{children:"\u041f\u0440\u043e\u0447\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\u042f \u0431\u0443\u0434\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,n.jsx)(t.code,{children:"workflow \u2014 merge request event"}),", \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u043b \u0432 ",(0,n.jsx)(t.strong,{children:"workflow"})," \u0442\u0440\u0438\u0433\u0433\u0435\u0440 \u043d\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 MR:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-YAML",children:'workflow:\n  rules:\n    - if: $CI_PIPELINE_SOURCE == "merge_request_event"\n'})}),"\n",(0,n.jsxs)(t.p,{children:["\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 ",(0,n.jsx)(t.strong,{children:"Settings -> CI/CD -> Variables"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"$TOKEN"})," - Gitlab API Token"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u0412 gitlab runner \u0433\u0434\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f pipeline \u043d\u0443\u0436\u0435\u043d jq\n\u0417\u0430\u0440\u0430\u043d\u0435\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b\u0439 \u0438\u043b\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0441\u043a\u0440\u0438\u043f\u0442\u0430:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-YAML",children:"before_script:\n  - apt-get install jq -y\n"})}),"\n",(0,n.jsx)(t.h3,{id:"\u0441\u043a\u0440\u0438\u043f\u0442",children:"\u0421\u043a\u0440\u0438\u043f\u0442"}),"\n",(0,n.jsx)(t.p,{children:"\u041f\u043e\u0448\u0430\u0433\u043e\u0432\u0430\u044f \u043b\u043e\u0433\u0438\u043a\u0430 \u0441\u043a\u0440\u0438\u043f\u0442\u0430:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 merge request ID"}),"\n",(0,n.jsx)(t.li,{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c ID \u0430\u0432\u0442\u043e\u0440\u0430 merge request"}),"\n",(0,n.jsx)(t.li,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c Assigne = ID \u0410\u0432\u0442\u043e\u0440\u0430"}),"\n",(0,n.jsx)(t.li,{children:"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c Reviewers = \u0438\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439  Reviewers(list)"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-YAML",children:'variables:\n    PROJECT_URL: \'https://gitlab.com/api/v4/projects/$CI_PROJECT_ID/merge_requests\'\n    REVIEWERS: \'10043654\' # Reviewers Gitlab ID List\n\n.gitlab_add_assignee_reviewers:\n  stage: set up merge request\n  script:\n    - read LAST_MR_ID < <(curl --header "PRIVATE-TOKEN:$TOKEN" "$PROJECT_URL" | jq \'.[0] | .iid\')\n    - read MR_AUTHOR < <(curl --header "PRIVATE-TOKEN:$TOKEN" "$PROJECT_URL/$LAST_MR_ID" | jq \'.author | .id\')\n    # add assignee\n    - curl -s --request PUT --header "PRIVATE-TOKEN:$TOKEN" "$PROJECT_URL/$LAST_MR_ID" --form "assignee_ids=$MR_AUTHOR" | jq \'.assignees\'\n    # add reviewers\n    - curl -s --request PUT --header "PRIVATE-TOKEN:$TOKEN" "$PROJECT_URL/$LAST_MR_ID" --form "reviewer_ids=$REVIEWERS"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"3-python-gitlab-api",children:"3. Python gitlab API"}),"\n",(0,n.jsxs)(t.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0431\u043e\u043b\u0435\u0435 \u0433\u0438\u0431\u043a\u0438\u0439 \u0438 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0432 \u043f\u043b\u0430\u043d\u0435 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043e\u043a \u043f\u043e\u0434 \u0440\u0430\u0437\u043d\u044b\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f.\n\u0415\u0441\u0442\u044c \u0442\u0430\u043a \u0436\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u043a python script \u0432 ",(0,n.jsx)(t.code,{children:"gitlab-ci"})]}),"\n",(0,n.jsxs)(t.p,{children:["\u041f\u043e\u043b\u043d\u044b\u0439 \u043a\u043e\u0434 \u043d\u0430 ",(0,n.jsx)(t.a,{href:"https://github.com/akmalovaa/gitlab-auto-add-reviewers/tree/master/Python",children:"github"})]}),"\n",(0,n.jsx)(t.p,{children:"Python/settings.py"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Python",children:"GITLAB_API_ADDR = '<https://gitlab.com>'    # Your Gitlab URL\nGITLAB_TOKEN='YOUR GITLAB API TOKEN'        # API Token use import .env\nGITLAB_ROOT_GROUP = ''                      # Root Group optional\nGITLAB_REVIEWERS: list = [10043654]         # Gitlab Reviewrs ID\n"})}),"\n",(0,n.jsx)(t.p,{children:"Python/main.py"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-Python",children:'import gitlab\nimport settings\nimport typing\n\ngl = gitlab.Gitlab(settings.GITLAB_API_ADDR, private_token=settings.GITLAB_TOKEN)\n\n\ndef get_last_merge_requests() -> None:\n    """ Get last merg request """\n    if settings.GITLAB_ROOT_GROUP == \'\':\n        all_mr: typing.Any = gl.mergerequests.list(state="opened")\n    else:\n        all_mr: typing.Any = gl.groups.get(settings.GITLAB_ROOT_GROUP).mergerequests.list(state="opened")\n    try:\n        last_mr: gitlab.v4.objects.merge_requests.MergeRequest = all_mr[0]\n    except IndexError:\n        print("Merge requests - Not found")\n        return\n    _auto_add_responsible(last_mr)\n\n\ndef _auto_add_responsible(mr: gitlab.v4.objects.merge_requests.GroupMergeRequest) -> None:\n    project: gitlab.v4.objects.projects.Project = gl.projects.get(\n        mr.project_id, lazy=True\n    )\n    editable_mr: gitlab.v4.objects.merge_requests.ProjectMergeRequest = (\n        project.mergerequests.get(mr.iid, lazy=True)\n    )\n    editable_mr.assignee_id = mr.author["id"]\n    editable_mr.reviewer_ids = settings.GITLAB_REVIEWERS\n    print(editable_mr)\n    editable_mr.save()\n\n\nif __name__ == "__main__":\n    get_last_merge_requests()\n'})}),"\n",(0,n.jsxs)(t.p,{children:["example for ",(0,n.jsx)(t.code,{children:".gitlab-ci.yml"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-YAML",children:".python_add_reviewers:\n  script:\n    - pip install virtualenv\n    - virtualenv venv\n    - source venv/bin/activate\n    - pip install -r Python/requirements.txt\n    - python Python/main.py\n"})})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5929:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gitlab-reviewers-c3e4e494b3c1598ca2d3333cd210227a.png"},5606:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gitlab-mr-template-44098fae936bf6b74d5cfb6958c9e6e1.png"},7178:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gitlab-reviewers-c3e4e494b3c1598ca2d3333cd210227a.png"},5178:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/gitlab-template-a81aa1e33546eba521e392c74d5b96c0.png"},97:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/mr-f18b428bbad8907030149a86c8b83e1f.png"},8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var n=s(6540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);