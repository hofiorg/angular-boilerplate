package org.hofi;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SinglePageAppController {

    @RequestMapping({"/view/**" })
    public String forward() {
        return "forward:/";
    }
}
