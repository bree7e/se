<?php

namespace src\Integration;

abstract class DataProvider
{
    protected $host;
    protected $user;
    protected $password;

    /**
     * @param $host
     * @param $user
     * @param $password
     */
    public function __construct($host, $user, $password)
    {
        $this->host = $host;
        $this->user = $user;
        $this->password = $password;
    }

	public function getPassword() 
	{
		return $this->password;
	}

	public function setPassword($password) 
	{
		$this->password = $password;
	}

	public function getUser() 
	{
		return $this->user;
	}

	public function setUser($user) 
	{
		$this->user = $user;
	}

	public function getHost() 
	{
		return $this->host;
	}

	public function setHost($host) 
	{
		$this->host = $host;
	}

    /**
     * @param array $request
     *
     * @return array returns a response from external service
     */
    abstract public function get(array $request);
}
