import selenium as s
from selenium import webdriver
import time
driver=s.webdriver.Chrome()
driver.get(r'http://127.0.0.1:5500/To-do%20list/index.html')
for i in range(50):
    add_task=driver.find_element('id','add_task')
    add_task.click()
    task=driver.find_element('id','input')
    task.send_keys(f'test{i+1}')
    submit=driver.find_element('id','submit')
    submit.click()
time.sleep(10)
for i in range(50):
    if i%2==0:
        continue
    delete_task=driver.find_element('id','del_btn')
    delete_task.click()
input('Press enter to close the browser')
driver.quit()