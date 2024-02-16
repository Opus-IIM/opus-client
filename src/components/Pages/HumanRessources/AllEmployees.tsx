import { useEffect, useState } from "react";
import SERVICES from "@services/index";
import { APIResponse } from "@typesDef/API";
import { Employee } from "@typesDef/Employee";
import Link from "next/link";
import styled from "styled-components";

export const AllEmployeesScreen: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employeeId] = useState("");

  useEffect(() => {
    const getAllEmployee = async () => {
      SERVICES.API.getEmployees()
        .then((res: APIResponse<Employee[]>) => res.success && res.data)
        .then((employees) => {
          if (!employees) return;
          setEmployees(employees);
          console.log("@GetMostEmployees", employees);
        })
        .catch((err) => console.error("@GetMostEmployees error", err));
    };
    getAllEmployee();
  }, []);

  console.log("@employees", employees);
  return (
    <AllEmployees>
      <EmployeesContainer>
        <EmployeesHeader>
          <H2>Mes Agents</H2>
          <EmployeesTest>1 - 50</EmployeesTest>
        </EmployeesHeader>
        <EmployeesListContainer>
          <EmployeesTable>
            <EmployeesThead>
              <TR>
                <THFirst scope="col">Nom de l&apos;agent</THFirst>
                <TH scope="col">E-mail</TH>
                <TH scope="col">Poste</TH>
                <TH scope="col">Usure</TH>
                <THLast scope="col"></THLast>
              </TR>
            </EmployeesThead>
            <EmployeesTbody>
              <tr>
                <TD>
                  <Link href="/human-ressources/employee/1">
                    <DIVCENTER>
                      <IMG src="https://randomuser.me/api/portraits/men/1.jpg" />
                      <SPAN>Michel Lelieu</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>michel.Lelieu@chatennay.fr</TD>
                <TD>Adjoint</TD>
                <TDUSURE>
                  <span className="red"></span>
                </TDUSURE>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href="/human-ressources/employee/1">
                    <DIVCENTER>
                      <IMG src="https://randomuser.me/api/portraits/men/5.jpg" />
                      <SPAN>Matthieu Bertrand</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>marie.bertrand@chatennay.fr</TD>
                <TD>Technique</TD>
                <TDUSURE>
                  <span className="red"></span>
                </TDUSURE>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href="/human-ressources/employee/1">
                    <DIVCENTER>
                      <IMG src="https://randomuser.me/api/portraits/men/25.jpg" />
                      <SPAN>Lucie Marile</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>lucie.marile@chatennay.fr</TD>
                <TD>Secrétaire</TD>
                <TDUSURE>
                  <span className="orange"></span>
                </TDUSURE>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href="/human-ressources/employee/1">
                    <DIVCENTER>
                      <IMG src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXEzeH///+/yd/j5/DS2ej3+Pva4OzJ0eTW3OrM1OXy9Pjs7/Xk6PH7/P3o6/Pc4e01OR2yAAADhElEQVR4nO3dCZqrIBAEYNNxy+r9b/s0eVkmY5LuVmzKqf8E1AcCAmJREBERERERERERERERERERERERERERERERERERERERERERERERERERERnIYNe2pUSXJAWRoj7uT5uL7doi9hVXn/+HG5xXFbBP1+03P9QrCtjHe667q3Y9AaU5/orXW01AKfcj8XrNOiJKWY3nW0lPKs37fL0Kvhpl+ynfALs7/VKBVwfgiFJ+zze01OhyukmtCtjbRRfVRx+wj4jYUqXVB8SsxcYSsB/8o8trJmOztE+iC2wlnTHgZo/2KFoDbjYdVMTvU5kR0YU2EcVc5pcjUiXuHAGxXhdNY+Ed0KBo70kv6uhy67k6GibMChO+AbRq8wcSnlef8MCETJg7JmTC/LleD5kwK0zIhPljQibMHxMyYfbKduUJfUv6vaoCWW3zLelfM2LUou6MCXJCx+7oDciBWvEnBOlr/kBC6zGMB5C+1DneD9rosuvImxPBCiC7wM59mUF00ZUmJMToaCYM+SgDvn+4ABks3NuHMB1N4X67gGmk7r6mjC63gWtIhDqc6HoSowtt4xgwgJ7CgWPAgDp86XoQQWbdN44HEasKHeMF2GPo6Gq66BJbmbsauE9KrA8iXCM1z01BVmieGVdr8KrQWIkwb4bP5KgPeIourI+hneK8+r7QLg1DttErZUK4sfBOu74fXc4JlHUYXUw/7YARXU4/7X53dDn9tJ+wRZfTTf2SCDtYaGc1J9yEygPtwAmVy1HACZUDPnBCXUDYhCL6hJARTd/NIL4fGlei4O79sK8m4r1AWVeEwXYtCv2U9AZvydu6bwFy7vLBfrYNLaF9DxismTo2SMEmNsarzC6gelPLcvcd0A2RIrXrlHAHMj2VnfdUW1+NZfYh++rzH4EenLZFzhml8Vffwz7XipS3Nz6bZVmRUnT+bxBGHDL7pcA8zfOnqs6nsc7XPF+cs7gKW6Sb1nt+FN/rSOH/8kDnFDoPSPH4jThGNVbZJXr8fjtE3BW9YL5BtfTosXC+S8YlL+APyDdYrNMJynexxAcL0vhuuYLJ6Hp7n9Up6fOo/J1DYlW6scN5Ddv8UjXVZtb3o0nSHPVzX+iRQopa9CyBJjT/774yCzj/huOEWwQSmfvzBd8l60nNuwsw4TKPZObdyslipH8152fD8XO1MXNuG7s/sE9K2Uz/AXzJKuWNr0IgAAAAAElFTkSuQmCC" />
                      <SPAN>Agent</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>agent@chatennay.fr</TD>
                <TD>...</TD>
                <TDUSURE>
                  <span className="orange"></span>
                </TDUSURE>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href="/human-ressources/employee/1">
                    <DIVCENTER>
                      <IMG src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXEzeH///+/yd/j5/DS2ej3+Pva4OzJ0eTW3OrM1OXy9Pjs7/Xk6PH7/P3o6/Pc4e01OR2yAAADhElEQVR4nO3dCZqrIBAEYNNxy+r9b/s0eVkmY5LuVmzKqf8E1AcCAmJREBERERERERERERERERERERERERERERERERERERERERERERERERERERnIYNe2pUSXJAWRoj7uT5uL7doi9hVXn/+HG5xXFbBP1+03P9QrCtjHe667q3Y9AaU5/orXW01AKfcj8XrNOiJKWY3nW0lPKs37fL0Kvhpl+ynfALs7/VKBVwfgiFJ+zze01OhyukmtCtjbRRfVRx+wj4jYUqXVB8SsxcYSsB/8o8trJmOztE+iC2wlnTHgZo/2KFoDbjYdVMTvU5kR0YU2EcVc5pcjUiXuHAGxXhdNY+Ed0KBo70kv6uhy67k6GibMChO+AbRq8wcSnlef8MCETJg7JmTC/LleD5kwK0zIhPljQibMHxMyYfbKduUJfUv6vaoCWW3zLelfM2LUou6MCXJCx+7oDciBWvEnBOlr/kBC6zGMB5C+1DneD9rosuvImxPBCiC7wM59mUF00ZUmJMToaCYM+SgDvn+4ABks3NuHMB1N4X67gGmk7r6mjC63gWtIhDqc6HoSowtt4xgwgJ7CgWPAgDp86XoQQWbdN44HEasKHeMF2GPo6Gq66BJbmbsauE9KrA8iXCM1z01BVmieGVdr8KrQWIkwb4bP5KgPeIourI+hneK8+r7QLg1DttErZUK4sfBOu74fXc4JlHUYXUw/7YARXU4/7X53dDn9tJ+wRZfTTf2SCDtYaGc1J9yEygPtwAmVy1HACZUDPnBCXUDYhCL6hJARTd/NIL4fGlei4O79sK8m4r1AWVeEwXYtCv2U9AZvydu6bwFy7vLBfrYNLaF9DxismTo2SMEmNsarzC6gelPLcvcd0A2RIrXrlHAHMj2VnfdUW1+NZfYh++rzH4EenLZFzhml8Vffwz7XipS3Nz6bZVmRUnT+bxBGHDL7pcA8zfOnqs6nsc7XPF+cs7gKW6Sb1nt+FN/rSOH/8kDnFDoPSPH4jThGNVbZJXr8fjtE3BW9YL5BtfTosXC+S8YlL+APyDdYrNMJynexxAcL0vhuuYLJ6Hp7n9Up6fOo/J1DYlW6scN5Ddv8UjXVZtb3o0nSHPVzX+iRQopa9CyBJjT/774yCzj/huOEWwQSmfvzBd8l60nNuwsw4TKPZObdyslipH8152fD8XO1MXNuG7s/sE9K2Uz/AXzJKuWNr0IgAAAAAElFTkSuQmCC" />
                      <SPAN>Agent</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>agent@chatennay.fr</TD>
                <TD>...</TD>
                <TDUSURE>
                  <span className="orange"></span>
                </TDUSURE>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href="/human-ressources/employee/1">
                    <DIVCENTER>
                      <IMG src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXEzeH///+/yd/j5/DS2ej3+Pva4OzJ0eTW3OrM1OXy9Pjs7/Xk6PH7/P3o6/Pc4e01OR2yAAADhElEQVR4nO3dCZqrIBAEYNNxy+r9b/s0eVkmY5LuVmzKqf8E1AcCAmJREBERERERERERERERERERERERERERERERERERERERERERERERERERERnIYNe2pUSXJAWRoj7uT5uL7doi9hVXn/+HG5xXFbBP1+03P9QrCtjHe667q3Y9AaU5/orXW01AKfcj8XrNOiJKWY3nW0lPKs37fL0Kvhpl+ynfALs7/VKBVwfgiFJ+zze01OhyukmtCtjbRRfVRx+wj4jYUqXVB8SsxcYSsB/8o8trJmOztE+iC2wlnTHgZo/2KFoDbjYdVMTvU5kR0YU2EcVc5pcjUiXuHAGxXhdNY+Ed0KBo70kv6uhy67k6GibMChO+AbRq8wcSnlef8MCETJg7JmTC/LleD5kwK0zIhPljQibMHxMyYfbKduUJfUv6vaoCWW3zLelfM2LUou6MCXJCx+7oDciBWvEnBOlr/kBC6zGMB5C+1DneD9rosuvImxPBCiC7wM59mUF00ZUmJMToaCYM+SgDvn+4ABks3NuHMB1N4X67gGmk7r6mjC63gWtIhDqc6HoSowtt4xgwgJ7CgWPAgDp86XoQQWbdN44HEasKHeMF2GPo6Gq66BJbmbsauE9KrA8iXCM1z01BVmieGVdr8KrQWIkwb4bP5KgPeIourI+hneK8+r7QLg1DttErZUK4sfBOu74fXc4JlHUYXUw/7YARXU4/7X53dDn9tJ+wRZfTTf2SCDtYaGc1J9yEygPtwAmVy1HACZUDPnBCXUDYhCL6hJARTd/NIL4fGlei4O79sK8m4r1AWVeEwXYtCv2U9AZvydu6bwFy7vLBfrYNLaF9DxismTo2SMEmNsarzC6gelPLcvcd0A2RIrXrlHAHMj2VnfdUW1+NZfYh++rzH4EenLZFzhml8Vffwz7XipS3Nz6bZVmRUnT+bxBGHDL7pcA8zfOnqs6nsc7XPF+cs7gKW6Sb1nt+FN/rSOH/8kDnFDoPSPH4jThGNVbZJXr8fjtE3BW9YL5BtfTosXC+S8YlL+APyDdYrNMJynexxAcL0vhuuYLJ6Hp7n9Up6fOo/J1DYlW6scN5Ddv8UjXVZtb3o0nSHPVzX+iRQopa9CyBJjT/774yCzj/huOEWwQSmfvzBd8l60nNuwsw4TKPZObdyslipH8152fD8XO1MXNuG7s/sE9K2Uz/AXzJKuWNr0IgAAAAAElFTkSuQmCC" />
                      <SPAN>Agent</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>agent@chatennay.fr</TD>
                <TD>...</TD>
                <TDUSURE>
                  <span className="orange"></span>
                </TDUSURE>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href="/human-ressources/employee/1">
                    <DIVCENTER>
                      <IMG src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXEzeH///+/yd/j5/DS2ej3+Pva4OzJ0eTW3OrM1OXy9Pjs7/Xk6PH7/P3o6/Pc4e01OR2yAAADhElEQVR4nO3dCZqrIBAEYNNxy+r9b/s0eVkmY5LuVmzKqf8E1AcCAmJREBERERERERERERERERERERERERERERERERERERERERERERERERERERnIYNe2pUSXJAWRoj7uT5uL7doi9hVXn/+HG5xXFbBP1+03P9QrCtjHe667q3Y9AaU5/orXW01AKfcj8XrNOiJKWY3nW0lPKs37fL0Kvhpl+ynfALs7/VKBVwfgiFJ+zze01OhyukmtCtjbRRfVRx+wj4jYUqXVB8SsxcYSsB/8o8trJmOztE+iC2wlnTHgZo/2KFoDbjYdVMTvU5kR0YU2EcVc5pcjUiXuHAGxXhdNY+Ed0KBo70kv6uhy67k6GibMChO+AbRq8wcSnlef8MCETJg7JmTC/LleD5kwK0zIhPljQibMHxMyYfbKduUJfUv6vaoCWW3zLelfM2LUou6MCXJCx+7oDciBWvEnBOlr/kBC6zGMB5C+1DneD9rosuvImxPBCiC7wM59mUF00ZUmJMToaCYM+SgDvn+4ABks3NuHMB1N4X67gGmk7r6mjC63gWtIhDqc6HoSowtt4xgwgJ7CgWPAgDp86XoQQWbdN44HEasKHeMF2GPo6Gq66BJbmbsauE9KrA8iXCM1z01BVmieGVdr8KrQWIkwb4bP5KgPeIourI+hneK8+r7QLg1DttErZUK4sfBOu74fXc4JlHUYXUw/7YARXU4/7X53dDn9tJ+wRZfTTf2SCDtYaGc1J9yEygPtwAmVy1HACZUDPnBCXUDYhCL6hJARTd/NIL4fGlei4O79sK8m4r1AWVeEwXYtCv2U9AZvydu6bwFy7vLBfrYNLaF9DxismTo2SMEmNsarzC6gelPLcvcd0A2RIrXrlHAHMj2VnfdUW1+NZfYh++rzH4EenLZFzhml8Vffwz7XipS3Nz6bZVmRUnT+bxBGHDL7pcA8zfOnqs6nsc7XPF+cs7gKW6Sb1nt+FN/rSOH/8kDnFDoPSPH4jThGNVbZJXr8fjtE3BW9YL5BtfTosXC+S8YlL+APyDdYrNMJynexxAcL0vhuuYLJ6Hp7n9Up6fOo/J1DYlW6scN5Ddv8UjXVZtb3o0nSHPVzX+iRQopa9CyBJjT/774yCzj/huOEWwQSmfvzBd8l60nNuwsw4TKPZObdyslipH8152fD8XO1MXNuG7s/sE9K2Uz/AXzJKuWNr0IgAAAAAElFTkSuQmCC" />
                      <SPAN>Agent</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>agent@chatennay.fr</TD>
                <TD>...</TD>
                <TDUSURE>
                  <span className="orange"></span>
                </TDUSURE>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href="/human-ressources/employee/1">
                    <DIVCENTER>
                      <IMG src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXEzeH///+/yd/j5/DS2ej3+Pva4OzJ0eTW3OrM1OXy9Pjs7/Xk6PH7/P3o6/Pc4e01OR2yAAADhElEQVR4nO3dCZqrIBAEYNNxy+r9b/s0eVkmY5LuVmzKqf8E1AcCAmJREBERERERERERERERERERERERERERERERERERERERERERERERERERERnIYNe2pUSXJAWRoj7uT5uL7doi9hVXn/+HG5xXFbBP1+03P9QrCtjHe667q3Y9AaU5/orXW01AKfcj8XrNOiJKWY3nW0lPKs37fL0Kvhpl+ynfALs7/VKBVwfgiFJ+zze01OhyukmtCtjbRRfVRx+wj4jYUqXVB8SsxcYSsB/8o8trJmOztE+iC2wlnTHgZo/2KFoDbjYdVMTvU5kR0YU2EcVc5pcjUiXuHAGxXhdNY+Ed0KBo70kv6uhy67k6GibMChO+AbRq8wcSnlef8MCETJg7JmTC/LleD5kwK0zIhPljQibMHxMyYfbKduUJfUv6vaoCWW3zLelfM2LUou6MCXJCx+7oDciBWvEnBOlr/kBC6zGMB5C+1DneD9rosuvImxPBCiC7wM59mUF00ZUmJMToaCYM+SgDvn+4ABks3NuHMB1N4X67gGmk7r6mjC63gWtIhDqc6HoSowtt4xgwgJ7CgWPAgDp86XoQQWbdN44HEasKHeMF2GPo6Gq66BJbmbsauE9KrA8iXCM1z01BVmieGVdr8KrQWIkwb4bP5KgPeIourI+hneK8+r7QLg1DttErZUK4sfBOu74fXc4JlHUYXUw/7YARXU4/7X53dDn9tJ+wRZfTTf2SCDtYaGc1J9yEygPtwAmVy1HACZUDPnBCXUDYhCL6hJARTd/NIL4fGlei4O79sK8m4r1AWVeEwXYtCv2U9AZvydu6bwFy7vLBfrYNLaF9DxismTo2SMEmNsarzC6gelPLcvcd0A2RIrXrlHAHMj2VnfdUW1+NZfYh++rzH4EenLZFzhml8Vffwz7XipS3Nz6bZVmRUnT+bxBGHDL7pcA8zfOnqs6nsc7XPF+cs7gKW6Sb1nt+FN/rSOH/8kDnFDoPSPH4jThGNVbZJXr8fjtE3BW9YL5BtfTosXC+S8YlL+APyDdYrNMJynexxAcL0vhuuYLJ6Hp7n9Up6fOo/J1DYlW6scN5Ddv8UjXVZtb3o0nSHPVzX+iRQopa9CyBJjT/774yCzj/huOEWwQSmfvzBd8l60nNuwsw4TKPZObdyslipH8152fD8XO1MXNuG7s/sE9K2Uz/AXzJKuWNr0IgAAAAAElFTkSuQmCC" />
                      <SPAN>Agent</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>agent@chatennay.fr</TD>
                <TD>...</TD>
                <TDUSURE>
                  <span className="vert"></span>
                </TDUSURE>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href="/human-ressources/employee/1">
                    <DIVCENTER>
                      <IMG src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXEzeH///+/yd/j5/DS2ej3+Pva4OzJ0eTW3OrM1OXy9Pjs7/Xk6PH7/P3o6/Pc4e01OR2yAAADhElEQVR4nO3dCZqrIBAEYNNxy+r9b/s0eVkmY5LuVmzKqf8E1AcCAmJREBERERERERERERERERERERERERERERERERERERERERERERERERERERnIYNe2pUSXJAWRoj7uT5uL7doi9hVXn/+HG5xXFbBP1+03P9QrCtjHe667q3Y9AaU5/orXW01AKfcj8XrNOiJKWY3nW0lPKs37fL0Kvhpl+ynfALs7/VKBVwfgiFJ+zze01OhyukmtCtjbRRfVRx+wj4jYUqXVB8SsxcYSsB/8o8trJmOztE+iC2wlnTHgZo/2KFoDbjYdVMTvU5kR0YU2EcVc5pcjUiXuHAGxXhdNY+Ed0KBo70kv6uhy67k6GibMChO+AbRq8wcSnlef8MCETJg7JmTC/LleD5kwK0zIhPljQibMHxMyYfbKduUJfUv6vaoCWW3zLelfM2LUou6MCXJCx+7oDciBWvEnBOlr/kBC6zGMB5C+1DneD9rosuvImxPBCiC7wM59mUF00ZUmJMToaCYM+SgDvn+4ABks3NuHMB1N4X67gGmk7r6mjC63gWtIhDqc6HoSowtt4xgwgJ7CgWPAgDp86XoQQWbdN44HEasKHeMF2GPo6Gq66BJbmbsauE9KrA8iXCM1z01BVmieGVdr8KrQWIkwb4bP5KgPeIourI+hneK8+r7QLg1DttErZUK4sfBOu74fXc4JlHUYXUw/7YARXU4/7X53dDn9tJ+wRZfTTf2SCDtYaGc1J9yEygPtwAmVy1HACZUDPnBCXUDYhCL6hJARTd/NIL4fGlei4O79sK8m4r1AWVeEwXYtCv2U9AZvydu6bwFy7vLBfrYNLaF9DxismTo2SMEmNsarzC6gelPLcvcd0A2RIrXrlHAHMj2VnfdUW1+NZfYh++rzH4EenLZFzhml8Vffwz7XipS3Nz6bZVmRUnT+bxBGHDL7pcA8zfOnqs6nsc7XPF+cs7gKW6Sb1nt+FN/rSOH/8kDnFDoPSPH4jThGNVbZJXr8fjtE3BW9YL5BtfTosXC+S8YlL+APyDdYrNMJynexxAcL0vhuuYLJ6Hp7n9Up6fOo/J1DYlW6scN5Ddv8UjXVZtb3o0nSHPVzX+iRQopa9CyBJjT/774yCzj/huOEWwQSmfvzBd8l60nNuwsw4TKPZObdyslipH8152fD8XO1MXNuG7s/sE9K2Uz/AXzJKuWNr0IgAAAAAElFTkSuQmCC" />
                      <SPAN>Agent</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>agent@chatennay.fr</TD>
                <TD>...</TD>
                <TDUSURE>
                  <span className="vert"></span>
                </TDUSURE>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href="/human-ressources/employee/1">
                    <DIVCENTER>
                      <IMG src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXEzeH///+/yd/j5/DS2ej3+Pva4OzJ0eTW3OrM1OXy9Pjs7/Xk6PH7/P3o6/Pc4e01OR2yAAADhElEQVR4nO3dCZqrIBAEYNNxy+r9b/s0eVkmY5LuVmzKqf8E1AcCAmJREBERERERERERERERERERERERERERERERERERERERERERERERERERERnIYNe2pUSXJAWRoj7uT5uL7doi9hVXn/+HG5xXFbBP1+03P9QrCtjHe667q3Y9AaU5/orXW01AKfcj8XrNOiJKWY3nW0lPKs37fL0Kvhpl+ynfALs7/VKBVwfgiFJ+zze01OhyukmtCtjbRRfVRx+wj4jYUqXVB8SsxcYSsB/8o8trJmOztE+iC2wlnTHgZo/2KFoDbjYdVMTvU5kR0YU2EcVc5pcjUiXuHAGxXhdNY+Ed0KBo70kv6uhy67k6GibMChO+AbRq8wcSnlef8MCETJg7JmTC/LleD5kwK0zIhPljQibMHxMyYfbKduUJfUv6vaoCWW3zLelfM2LUou6MCXJCx+7oDciBWvEnBOlr/kBC6zGMB5C+1DneD9rosuvImxPBCiC7wM59mUF00ZUmJMToaCYM+SgDvn+4ABks3NuHMB1N4X67gGmk7r6mjC63gWtIhDqc6HoSowtt4xgwgJ7CgWPAgDp86XoQQWbdN44HEasKHeMF2GPo6Gq66BJbmbsauE9KrA8iXCM1z01BVmieGVdr8KrQWIkwb4bP5KgPeIourI+hneK8+r7QLg1DttErZUK4sfBOu74fXc4JlHUYXUw/7YARXU4/7X53dDn9tJ+wRZfTTf2SCDtYaGc1J9yEygPtwAmVy1HACZUDPnBCXUDYhCL6hJARTd/NIL4fGlei4O79sK8m4r1AWVeEwXYtCv2U9AZvydu6bwFy7vLBfrYNLaF9DxismTo2SMEmNsarzC6gelPLcvcd0A2RIrXrlHAHMj2VnfdUW1+NZfYh++rzH4EenLZFzhml8Vffwz7XipS3Nz6bZVmRUnT+bxBGHDL7pcA8zfOnqs6nsc7XPF+cs7gKW6Sb1nt+FN/rSOH/8kDnFDoPSPH4jThGNVbZJXr8fjtE3BW9YL5BtfTosXC+S8YlL+APyDdYrNMJynexxAcL0vhuuYLJ6Hp7n9Up6fOo/J1DYlW6scN5Ddv8UjXVZtb3o0nSHPVzX+iRQopa9CyBJjT/774yCzj/huOEWwQSmfvzBd8l60nNuwsw4TKPZObdyslipH8152fD8XO1MXNuG7s/sE9K2Uz/AXzJKuWNr0IgAAAAAElFTkSuQmCC" />
                      <SPAN>Agent</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>agent@chatennay.fr</TD>
                <TD>...</TD>
                <TDUSURE>
                  <span className="vert"></span>
                </TDUSURE>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href="/human-ressources/employee/1">
                    <DIVCENTER>
                      <IMG src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXEzeH///+/yd/j5/DS2ej3+Pva4OzJ0eTW3OrM1OXy9Pjs7/Xk6PH7/P3o6/Pc4e01OR2yAAADhElEQVR4nO3dCZqrIBAEYNNxy+r9b/s0eVkmY5LuVmzKqf8E1AcCAmJREBERERERERERERERERERERERERERERERERERERERERERERERERERERnIYNe2pUSXJAWRoj7uT5uL7doi9hVXn/+HG5xXFbBP1+03P9QrCtjHe667q3Y9AaU5/orXW01AKfcj8XrNOiJKWY3nW0lPKs37fL0Kvhpl+ynfALs7/VKBVwfgiFJ+zze01OhyukmtCtjbRRfVRx+wj4jYUqXVB8SsxcYSsB/8o8trJmOztE+iC2wlnTHgZo/2KFoDbjYdVMTvU5kR0YU2EcVc5pcjUiXuHAGxXhdNY+Ed0KBo70kv6uhy67k6GibMChO+AbRq8wcSnlef8MCETJg7JmTC/LleD5kwK0zIhPljQibMHxMyYfbKduUJfUv6vaoCWW3zLelfM2LUou6MCXJCx+7oDciBWvEnBOlr/kBC6zGMB5C+1DneD9rosuvImxPBCiC7wM59mUF00ZUmJMToaCYM+SgDvn+4ABks3NuHMB1N4X67gGmk7r6mjC63gWtIhDqc6HoSowtt4xgwgJ7CgWPAgDp86XoQQWbdN44HEasKHeMF2GPo6Gq66BJbmbsauE9KrA8iXCM1z01BVmieGVdr8KrQWIkwb4bP5KgPeIourI+hneK8+r7QLg1DttErZUK4sfBOu74fXc4JlHUYXUw/7YARXU4/7X53dDn9tJ+wRZfTTf2SCDtYaGc1J9yEygPtwAmVy1HACZUDPnBCXUDYhCL6hJARTd/NIL4fGlei4O79sK8m4r1AWVeEwXYtCv2U9AZvydu6bwFy7vLBfrYNLaF9DxismTo2SMEmNsarzC6gelPLcvcd0A2RIrXrlHAHMj2VnfdUW1+NZfYh++rzH4EenLZFzhml8Vffwz7XipS3Nz6bZVmRUnT+bxBGHDL7pcA8zfOnqs6nsc7XPF+cs7gKW6Sb1nt+FN/rSOH/8kDnFDoPSPH4jThGNVbZJXr8fjtE3BW9YL5BtfTosXC+S8YlL+APyDdYrNMJynexxAcL0vhuuYLJ6Hp7n9Up6fOo/J1DYlW6scN5Ddv8UjXVZtb3o0nSHPVzX+iRQopa9CyBJjT/774yCzj/huOEWwQSmfvzBd8l60nNuwsw4TKPZObdyslipH8152fD8XO1MXNuG7s/sE9K2Uz/AXzJKuWNr0IgAAAAAElFTkSuQmCC" />
                      <SPAN>Agent</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>agent@chatennay.fr</TD>
                <TD>...</TD>
                <TDUSURE>
                  <span className="vert"></span>
                </TDUSURE>
                <TD>...</TD>
              </tr>
              <tr>
                <TD>
                  <Link href="/human-ressources/employee/1">
                    <DIVCENTER>
                      <IMG src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXEzeH///+/yd/j5/DS2ej3+Pva4OzJ0eTW3OrM1OXy9Pjs7/Xk6PH7/P3o6/Pc4e01OR2yAAADhElEQVR4nO3dCZqrIBAEYNNxy+r9b/s0eVkmY5LuVmzKqf8E1AcCAmJREBERERERERERERERERERERERERERERERERERERERERERERERERERERnIYNe2pUSXJAWRoj7uT5uL7doi9hVXn/+HG5xXFbBP1+03P9QrCtjHe667q3Y9AaU5/orXW01AKfcj8XrNOiJKWY3nW0lPKs37fL0Kvhpl+ynfALs7/VKBVwfgiFJ+zze01OhyukmtCtjbRRfVRx+wj4jYUqXVB8SsxcYSsB/8o8trJmOztE+iC2wlnTHgZo/2KFoDbjYdVMTvU5kR0YU2EcVc5pcjUiXuHAGxXhdNY+Ed0KBo70kv6uhy67k6GibMChO+AbRq8wcSnlef8MCETJg7JmTC/LleD5kwK0zIhPljQibMHxMyYfbKduUJfUv6vaoCWW3zLelfM2LUou6MCXJCx+7oDciBWvEnBOlr/kBC6zGMB5C+1DneD9rosuvImxPBCiC7wM59mUF00ZUmJMToaCYM+SgDvn+4ABks3NuHMB1N4X67gGmk7r6mjC63gWtIhDqc6HoSowtt4xgwgJ7CgWPAgDp86XoQQWbdN44HEasKHeMF2GPo6Gq66BJbmbsauE9KrA8iXCM1z01BVmieGVdr8KrQWIkwb4bP5KgPeIourI+hneK8+r7QLg1DttErZUK4sfBOu74fXc4JlHUYXUw/7YARXU4/7X53dDn9tJ+wRZfTTf2SCDtYaGc1J9yEygPtwAmVy1HACZUDPnBCXUDYhCL6hJARTd/NIL4fGlei4O79sK8m4r1AWVeEwXYtCv2U9AZvydu6bwFy7vLBfrYNLaF9DxismTo2SMEmNsarzC6gelPLcvcd0A2RIrXrlHAHMj2VnfdUW1+NZfYh++rzH4EenLZFzhml8Vffwz7XipS3Nz6bZVmRUnT+bxBGHDL7pcA8zfOnqs6nsc7XPF+cs7gKW6Sb1nt+FN/rSOH/8kDnFDoPSPH4jThGNVbZJXr8fjtE3BW9YL5BtfTosXC+S8YlL+APyDdYrNMJynexxAcL0vhuuYLJ6Hp7n9Up6fOo/J1DYlW6scN5Ddv8UjXVZtb3o0nSHPVzX+iRQopa9CyBJjT/774yCzj/huOEWwQSmfvzBd8l60nNuwsw4TKPZObdyslipH8152fD8XO1MXNuG7s/sE9K2Uz/AXzJKuWNr0IgAAAAAElFTkSuQmCC" />
                      <SPAN>Agent</SPAN>
                    </DIVCENTER>
                  </Link>
                </TD>
                <TD>agent@chatennay.fr</TD>
                <TD>...</TD>
                <TDUSURE>
                  <span className="vert"></span>
                </TDUSURE>
                <TD>...</TD>
              </tr>
            </EmployeesTbody>
          </EmployeesTable>
        </EmployeesListContainer>
      </EmployeesContainer>
    </AllEmployees>
  );
};

const AllEmployees = styled.section`
  background-color: ${({ theme }) => theme.colors.light};
  min-height: calc(100dvh - 88px);
  width: calc(100% - 48px);
  padding: 24px;
`;

const EmployeesContainer = styled.div`
  width: calc(100% - 48px);
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 20px;
`;

const EmployeesHeader = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const EmployeesTest = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 12px;
  padding: 8px;
  color: ${({ theme }) => theme.colors.grey[600]};
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  font-weight: 600;
  font-size: 16px;
`;

const EmployeesListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const EmployeesTable = styled.table`
  width: 100%;
`;

const EmployeesThead = styled.thead`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.grey[600]};
  padding: 20px;
`;

const EmployeesTbody = styled.tbody``;

const SPAN = styled.span`
  color: black;
  margin-left: 48px;
`;

const DIVCENTER = styled.div`
  display: flex;
  align-items: center;
`;

const TR = styled.tr`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
`;

const TH = styled.th`
  padding: 16px;
`;

const THFirst = styled.th`
  padding: 16px;
  border-radius: 8px 0 0 8px;
`;

const THLast = styled.th`
  padding: 16px;
  border-radius: 0 8px 8px 0;
`;

const TD = styled.td`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
`;

const TDUSURE = styled.td`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  position: relative;

  span {
    position: absolute;
    height: 24px;
    width: 24px;
    border-radius: 24px;
    background-color: green;
  }

  span.red {
    background-color: red;
  }
  span.orange {
    background-color: orange;
  }
`;

const IMG = styled.img`
  position: absolute;
  border-radius: 12px;
  height: 32px;
  width: 32px;
  object-fit: cover;
`;
