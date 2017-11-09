package com.juniter.blog.conf;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewRedirectController {
    @RequestMapping("/home")
    public String home(){
        return "home";
    }
}
