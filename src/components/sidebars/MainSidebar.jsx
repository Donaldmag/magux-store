"use client";

import {
  AccordionMenu,
  AccordionMenuGroup,
  AccordionMenuIndicator,
  AccordionMenuItem,
  AccordionMenuLabel,
  AccordionMenuSeparator,
  AccordionMenuSub,
  AccordionMenuSubContent,
  AccordionMenuSubTrigger,
} from "../../components/ui/reui/accordion-menu";
// import { Alert, AlertIcon, AlertTitle } from "@/components/ui/alert";
// import { Badge } from "@/components/ui/badge";
// import { RiCheckboxCircleFill } from "@remixicon/react";
import { Briefcase, LifeBuoy, Mail, Settings, User } from "lucide-react";
// import { toast } from "sonner";

export default function MainSidebar() {
  return (
    <div className="w-full max-xl:max-w-[400px] overflow-hidden border border-zinc-50 shadow shadow-xs rounded-xl p-2 bg-white">
      <AccordionMenu
        type="multiple"
        defaultValue={["preferences", "messages"]}
        selectedValue="preferences-general"
        classNames={{
          separator: "-mx-2 mb-2.5",
        }}
      >
        {/* Main Menu Label */}
        {/* <AccordionMenuLabel>Navigation</AccordionMenuLabel> */}
        {/* <AccordionMenuSeparator /> */}

        <AccordionMenuGroup>
          {/* Single Menu Item: Account Overview */}
          
          <AccordionMenuItem
            value="overview"
            onClick={() =>
              toast.custom((t) => (
                <Alert
                  variant="mono"
                  icon="primary"
                  onClose={() => toast.dismiss(t)}
                >
                  <AlertIcon>
                    {/* <RiCheckboxCircleFill /> */}
                  </AlertIcon>
                  <AlertTitle>Account Overview clicked</AlertTitle>
                </Alert>
              ))
            }
          >
            <User />
            <span>Account Overview</span>
          </AccordionMenuItem>

          {/* Menu Item with Submenu: Message Center */}
          <AccordionMenuSub value="messages">
            <AccordionMenuSubTrigger>
              <Mail />
              <span>Message Center</span>
              <AccordionMenuIndicator />
            </AccordionMenuSubTrigger>
            
            <AccordionMenuSubContent type="multiple" parentValue="messages">
              <AccordionMenuGroup>
                
                <AccordionMenuItem
                  value="inbox"
                  onClick={() =>
                    toast.custom((t) => (
                      <Alert
                        variant="mono"
                        icon="primary"
                        onClose={() => toast.dismiss(t)}
                      >
                        <AlertIcon>
                          <RiCheckboxCircleFill />
                        </AlertIcon>
                        <AlertTitle>Inbox clicked</AlertTitle>
                      </Alert>
                    ))
                  }
                >
                  <span>Inbox</span>
                </AccordionMenuItem>

                <AccordionMenuItem
                  value="sent"
                  onClick={() =>
                    toast.custom((t) => (
                      <Alert
                        variant="mono"
                        icon="primary"
                        onClose={() => toast.dismiss(t)}
                      >
                        <AlertIcon>
                          <RiCheckboxCircleFill />
                        </AlertIcon>
                        <AlertTitle>Sent Items clicked</AlertTitle>
                      </Alert>
                    ))
                  }
                >
                  <span>Sent Items</span>
                </AccordionMenuItem>

                <AccordionMenuItem
                  value="drafts"
                  onClick={() =>
                    toast.custom((t) => (
                      <Alert
                        variant="mono"
                        icon="primary"
                        onClose={() => toast.dismiss(t)}
                      >
                        <AlertIcon>
                          <RiCheckboxCircleFill />
                        </AlertIcon>
                        <AlertTitle>Drafts clicked</AlertTitle>
                      </Alert>
                    ))
                  }
                >
                  <span>Drafts</span>
                </AccordionMenuItem>

                <AccordionMenuItem
                  value="spam"
                  onClick={() =>
                    toast.custom((t) => (
                      <Alert
                        variant="mono"
                        icon="destructive"
                        onClose={() => toast.dismiss(t)}
                      >
                        <AlertIcon>
                          <RiCheckboxCircleFill />
                        </AlertIcon>
                        <AlertTitle>Spam clicked</AlertTitle>
                      </Alert>
                    ))
                  }
                >
                  <span>Spam</span>
                </AccordionMenuItem>

              </AccordionMenuGroup>
            </AccordionMenuSubContent>
          </AccordionMenuSub>

        </AccordionMenuGroup>
      </AccordionMenu>
    </div>
  );
}
