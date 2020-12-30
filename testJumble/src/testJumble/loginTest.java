package testJumble;


import static org.testng.AssertJUnit.assertEquals;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.testng.ITestResult;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

public class loginTest {

	static WebDriver driver1 ;
	static Wait<WebDriver> wait;
	static String URL_TO_TEST = "http://localhost:3000/Login";

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\alexm\\OneDrive\\Desktop\\Second Year\\Semester 1\\CS265-Software Testing\\Code from praticals\\chromedriver.exe");
		driver1 = new ChromeDriver();
		wait = new WebDriverWait(driver1,1);
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		driver1.close();
		driver1.quit();
	}

	@BeforeMethod
	public void setUp() throws Exception {
        driver1.get(URL_TO_TEST);
    	driver1.manage().window().maximize();
    	wait.until(ExpectedConditions.presenceOfElementLocated(By.id("continue")));
    	wait.until(ExpectedConditions.presenceOfElementLocated(By.id("signin")));
	}

	public static void TestTemplate(String s1,String s2,
			String expectedAns)
	{
		System.out.println("START: The page title is now " + driver1.getTitle());

		driver1.findElement(By.id("Username")).sendKeys(s1);
		driver1.findElement(By.id("continue")).click();
		driver1.findElement(By.id("Password")).sendKeys(s2);
		driver1.findElement(By.id("signin")).click();
		System.out.println("PROCESS: The page title is now " + driver1.getTitle());

		String expectedAnswer = expectedAns;

		System.out.println("Our expected answer is [" + expectedAnswer + "]");

		try {
			Thread.sleep(400);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		String answerGenerated = driver1.findElement(By.id("tester")).getText();

		System.out.println("The answer generated by Login is [" + answerGenerated + "]");
		assertEquals(expectedAnswer,answerGenerated);

	}

	@Test(dataProvider="validData",description="Testing the application with VALID input data")
	public void validDataTests(String s1, String s2, String ans)
	{
		TestTemplate(s1,s2,ans);
	}

	@Test(dataProvider="invalidData",description="Testing the application with INVALID input data")
	public void invalidDataTests(String s1, String s2, String ans)
	{
		TestTemplate(s1,s2,ans);
	}

	@DataProvider(name="validData")
	public static Object[][] createValidData()
	{
		Object[][] validData =
		{
			{"Alextest","ewfwe",""},
			{"Deerdra1111","thedoor",""},
			{"SeanTheMan!!","VHVyaW5nTWFjaGluZUJ5U3RldmVKb2Jz",""},
			{"theProfessor02","dGhlQm9tQjMwNA==",""}
		};
		return validData;

	}
	
	@DataProvider(name="invalidData")
	public static Object[][] createInValidData()
	{
		Object[][] invalidData =
		{
			{"mfwkmfw","iemfqieo","Fail"},
			{"Imposter","Hacker","Fail"},
			{"Select * from table","where numOfGoals > 5","Fail"},
			{"Testing","Security","Fail"},
		};
		return invalidData;
	}

    @AfterMethod
    public void takeScreenShotOnFailure(ITestResult testResult) throws IOException {
        if (testResult.getStatus() == ITestResult.FAILURE) {
            System.out.println(testResult.getStatus());
            String fn = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss").format(new Date()).toString();
            fn = "FailedTest_" + fn + ".png";
            File scrFile = ((TakesScreenshot) driver1).getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(scrFile, new File(fn));
        }
    }



}